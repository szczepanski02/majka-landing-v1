import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-selling-points',
  templateUrl: './selling-points.component.html',
  styleUrls: ['./selling-points.component.scss']
})
export class SellingPointsComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;
  
  constructor() { }

  ngOnInit(): void {
  }

}
