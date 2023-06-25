import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-our-mission',
  templateUrl: './home-our-mission.component.html',
  styleUrls: ['./home-our-mission.component.scss']
})
export class HomeOurMissionComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {
  }

}
