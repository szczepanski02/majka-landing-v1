import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-our-vision',
  templateUrl: './home-our-vision.component.html',
  styleUrls: ['./home-our-vision.component.scss']
})
export class HomeOurVisionComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
