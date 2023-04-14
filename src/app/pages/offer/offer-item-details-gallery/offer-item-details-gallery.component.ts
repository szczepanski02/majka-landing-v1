import { Component, Input, OnInit } from '@angular/core';
import { OfferItem } from '../offer.service';

@Component({
  selector: 'app-offer-item-details-gallery',
  templateUrl: './offer-item-details-gallery.component.html',
  styleUrls: ['./offer-item-details-gallery.component.scss']
})
export class OfferItemDetailsGalleryComponent implements OnInit {

  @Input() item!: OfferItem;

  constructor() { }

  ngOnInit(): void {
  }

}
