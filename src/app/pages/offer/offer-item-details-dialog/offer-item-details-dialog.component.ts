import { Component, Input } from '@angular/core';
import { OfferItem } from '../offer.service';
import { OfferItemDetailsDialogService } from './offer-item-details-dialog.service';

@Component({
  selector: 'app-offer-item-details-dialog',
  templateUrl: './offer-item-details-dialog.component.html',
  styleUrls: ['./offer-item-details-dialog.component.scss']
})
export class OfferItemDetailsDialogComponent {

  @Input() item!: OfferItem;

  constructor(private offerItemDetailsDiaogService: OfferItemDetailsDialogService) { }

  close(): void {
    this.offerItemDetailsDiaogService.close();
  }

}
