import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { OfferFilter, OfferItem, OfferService } from './offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  items$: Observable<OfferItem[]> = this.offerService.getItems();
  filters$: Observable<OfferFilter[]> = this.offerService.getFilters();
  page$: Observable<number> = this.offerService.getPage();

  public HeaderOverlays = HeaderOverlays;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
  }

  onPageChanged(num: number): void {
    this.offerService.setPage(num);
  }

}
