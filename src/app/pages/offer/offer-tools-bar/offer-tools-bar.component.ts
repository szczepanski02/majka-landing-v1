import { Observable, Subscription } from 'rxjs';
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

  constructor(private offerService: OfferService) {
    this.subs.add(this.offerService.getActiveFilter()
      .subscribe(filter => this.activeFilter = filter));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setActiveFilter(filter: OfferFilter): void {
    this.offerService.setActiveFilter(filter);
  }

  search(): void {
    this.offerService.setSearchTerm(this.searchTerm.value);
  }
  
  clear(): void {
    this.offerService.setSearchTerm('');
  }

}
