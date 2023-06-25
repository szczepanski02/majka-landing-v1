import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-selling-points-basic-info',
  templateUrl: './selling-points-basic-info.component.html',
  styleUrls: ['./selling-points-basic-info.component.scss']
})
export class SellingPointsBasicInfoComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
