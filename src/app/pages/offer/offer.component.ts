import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { OfferFilter, OfferItem, OfferService } from './offer.service';
import { OfferItemDetailsDialogService } from './offer-item-details-dialog/offer-item-details-dialog.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  items$: Observable<OfferItem[]> = this.offerService.getItems();
  filters$: Observable<OfferFilter[]> = this.offerService.getFilters();
  page$: Observable<number> = this.offerService.getPage();

  dialogItem$: Observable<OfferItem | null> = this.offerItemDetailsDialogService.getItem();

  public HeaderOverlays = HeaderOverlays;

  constructor(
    private offerService: OfferService,
    private offerItemDetailsDialogService: OfferItemDetailsDialogService
  ) { }

  ngOnInit(): void {}

  onPageChanged(num: number): void {
    this.offerService.setPage(num);
  }

}
