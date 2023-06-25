import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-selling-conditions-prices',
  templateUrl: './selling-conditions-prices.component.html',
  styleUrls: ['./selling-conditions-prices.component.scss']
})
export class SellingConditionsPricesComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
