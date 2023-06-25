import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-our-offer',
  templateUrl: './home-our-offer.component.html',
  styleUrls: ['./home-our-offer.component.scss']
})
export class HomeOurOfferComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
