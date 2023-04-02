import { Component, Input, OnInit } from '@angular/core';
import { OfferItem } from '../offer.service';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input() item!: OfferItem;

  constructor() { }

  ngOnInit(): void {
  }

}
