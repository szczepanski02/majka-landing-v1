import { Component, HostListener, Input } from '@angular/core';
import { OfferItem } from '../offer.service';
import { OfferItemDetailsDialogService } from './offer-item-details-dialog.service';

@Component({
  selector: 'app-offer-item-details-dialog',
  templateUrl: './offer-item-details-dialog.component.html',
  styleUrls: ['./offer-item-details-dialog.component.scss']
})
export class OfferItemDetailsDialogComponent {

  @Input() item!: OfferItem;

  opened = false;

  constructor(
    private offerItemDetailsDiaogService: OfferItemDetailsDialogService,
  ) { }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const dialogElement = document.querySelector('.dialog');
    if (dialogElement && !dialogElement.contains(target)) {
      if (this.opened) {
        this.close();
      } else {
        this.opened = true;
      }
    }
  }

  close(): void {
    this.offerItemDetailsDiaogService.close();
  }

}
