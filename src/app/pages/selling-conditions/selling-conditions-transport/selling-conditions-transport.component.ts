import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-selling-conditions-transport',
  templateUrl: './selling-conditions-transport.component.html',
  styleUrls: ['./selling-conditions-transport.component.scss']
})
export class SellingConditionsTransportComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
