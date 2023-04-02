import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-selling-conditions',
  templateUrl: './selling-conditions.component.html',
  styleUrls: ['./selling-conditions.component.scss']
})
export class SellingConditionsComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  constructor() { }

  ngOnInit(): void {
  }

}
