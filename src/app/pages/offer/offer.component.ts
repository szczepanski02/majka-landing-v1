import { Observable, Subscription, combineLatest, first, map } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { MetaModel, OfferFilter, OfferItem, OfferService } from './offer.service';
import { OfferItemDetailsDialogService } from './offer-item-details-dialog/offer-item-details-dialog.service';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy {

  items$: Observable<OfferItem[]> = this.offerService.getItems();
  meta$: Observable<MetaModel | null> = this.offerService.meta$;
  filters$: Observable<OfferFilter[]> = this.offerService.getFilters();
  page$: Observable<number> = this.offerService.getPage();

  dialogItem$: Observable<OfferItem | null> = this.offerItemDetailsDialogService.getItem();

  offerTranslations$: Observable<PageTranslationsModel> = this.txProvider.offerTranslations;

  loading$: Observable<boolean> = this.offerService.loading$.asObservable();

  public HeaderOverlays = HeaderOverlays;

  private subs = new Subscription();

  constructor(
    private offerService: OfferService,
    private offerItemDetailsDialogService: OfferItemDetailsDialogService,
    private txProvider: TranslationsProviderService,
  ) {
    this.subs.add(this.txProvider.lang$
      .subscribe(lang => {
        this.offerService.loadAdvanced(lang);
        this.offerService.loadFilters(lang);
      }));
  }

  ngOnInit(): void {
    this.subs.add(this.offerService.getFilters()
      .pipe(first(filters => filters.length > 0))
      .subscribe(filters => this.offerService.setActiveFilter(filters[0])));

    this.subs.add(combineLatest([
      this.offerService.getSearchTerm(),
      this.offerService.getActiveFilter(),
      this.offerService.getPage(),
      this.offerService.getAdvancedFilters(),
      this.txProvider.lang$
    ]).subscribe(([sarchTerm, filter, page, advancedFilters, lang]) => {
      this.offerService.loadItems(sarchTerm, page, filter.id, advancedFilters, lang);
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get totalPages(): Observable<number> {
    return this.meta$
      .pipe(map(meta => meta ? Math.ceil(meta.all / meta.per_page) : 0));
  }

  onPageChanged(num: number): void {
    this.offerService.setPage(num);
  }

}
