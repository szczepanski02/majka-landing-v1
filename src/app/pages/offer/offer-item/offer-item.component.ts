import { Component, Input, OnInit } from '@angular/core';
import { OfferItem } from '../offer.service';
import { OfferItemDetailsDialogService } from '../offer-item-details-dialog/offer-item-details-dialog.service';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input() item!: OfferItem;

  showHoverBox = false;

  constructor(private offerItemDetailsDialogService: OfferItemDetailsDialogService) { }

  ngOnInit(): void {
  }

  openDetailsDialog(): void {
    this.offerItemDetailsDialogService.open(this.item);
  }
}
