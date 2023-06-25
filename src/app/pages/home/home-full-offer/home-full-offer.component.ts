import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-full-offer',
  templateUrl: './home-full-offer.component.html',
  styleUrls: ['./home-full-offer.component.scss']
})
export class HomeFullOfferComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
