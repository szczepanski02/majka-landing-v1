import { BehaviorSubject, Observable, Subscription, first } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { OfferFilter, OfferService } from '../offer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-offer-tools-bar',
  templateUrl: './offer-tools-bar.component.html',
  styleUrls: ['./offer-tools-bar.component.scss']
})
export class OfferToolsBarComponent implements OnDestroy {

  filters$: Observable<OfferFilter[]> = this.offerService.getFilters();
  activeFilter: OfferFilter | null = null;

  searchTerm: FormControl = new FormControl('');

  private subs = new Subscription();

  isAdvancedOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private offerService: OfferService) {
    this.subs.add(this.offerService.getActiveFilter()
      .subscribe(filter => this.activeFilter = filter));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setActiveFilter(filter: OfferFilter): void {
    this.offerService.setPage(1);
    this.offerService.setActiveFilter(filter);
  }

  search(): void {
    this.offerService.setSearchTerm(this.searchTerm.value);
  }
  
  clear(): void {
    this.offerService.setSearchTerm('');
  }

  changeAdvancedState(): void {
    this.subs.add(this.isAdvancedOpen$
      .pipe(first())
      .subscribe(state => this.isAdvancedOpen$.next(!state)));
  }

}
