import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfferItem, OfferService } from '../offer.service';
@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss']
})
export class OfferGridComponent implements OnInit {

  items$: Observable<OfferItem[]> = this.offerSerivce.getItems();

  constructor(private offerSerivce: OfferService) { }

  ngOnInit(): void {
  }

}
