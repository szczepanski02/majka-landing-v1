import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-about-us',
  templateUrl: './home-about-us.component.html',
  styleUrls: ['./home-about-us.component.scss']
})
export class HomeAboutUsComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
