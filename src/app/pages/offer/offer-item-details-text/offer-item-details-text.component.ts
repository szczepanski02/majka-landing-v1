import { Component, Input, OnInit } from '@angular/core';
import { OfferItem } from '../offer.service';

@Component({
  selector: 'app-offer-item-details-text',
  templateUrl: './offer-item-details-text.component.html',
  styleUrls: ['./offer-item-details-text.component.scss']
})
export class OfferItemDetailsTextComponent implements OnInit {

  @Input() item!: OfferItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
