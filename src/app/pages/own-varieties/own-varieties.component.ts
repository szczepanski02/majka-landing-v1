import { Observable, filter } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { OwnVarietiesItemModel, OwnVarietiesService } from './own-varieties.service';
import { first, Subscription } from 'rxjs';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-own-varieties',
  templateUrl: './own-varieties.component.html',
  styleUrls: ['./own-varieties.component.scss']
})
export class OwnVarietiesComponent implements OnInit, OnDestroy {

  public HeaderOverlays = HeaderOverlays;

  items: OwnVarietiesItemModel[] = [];

  page$: Observable<number> = this.ownVarietiesService.getCurrentPage()
    .pipe(filter(page => !!page));

  ownVarietyTranslations$: Observable<PageTranslationsModel> = this.txProvider.ownVarietyTranslations;

  private subs = new Subscription();

  constructor(
    private ownVarietiesService: OwnVarietiesService,
    private txProvider: TranslationsProviderService,
  ) {
    this.loadItems(0);
  }

  ngOnInit(): void {
    this.subs.add(this.page$.subscribe(page => this.loadItems(page)));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  handlePageChanged(page: number): void {
    this.ownVarietiesService.setCurrentPage(page);
  }

  loadItems(pageIndex: number): void {
    this.subs.add(this.ownVarietiesService.getPaginated(pageIndex)
      .pipe(first(res => !!res))
      .subscribe({
        next: data => this.handleItemsSuccess(data),
        error: error => this.handleItemsFailure(error)
      }));
  }

  private handleItemsSuccess(items: OwnVarietiesItemModel[]): void {
    this.items = [...items];
  }

  private handleItemsFailure(error: Error): void {
    console.error(error.message);
  }

}