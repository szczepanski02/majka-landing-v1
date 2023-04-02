import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  constructor() { }

  ngOnInit(): void {
  }

}
