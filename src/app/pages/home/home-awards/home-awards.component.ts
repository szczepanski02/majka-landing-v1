import { Component } from '@angular/core';
import { HOME_AWARDS, HomeAwardModel } from './home-awards.const';

@Component({
  selector: 'app-home-awards',
  templateUrl: './home-awards.component.html',
  styleUrls: ['./home-awards.component.scss']
})
export class HomeAwardsComponent {

  awards: HomeAwardModel[] = HOME_AWARDS;
  activeAwardIndex: number = 0;
  
  constructor() { }

  setActiveAward(index: number): void {
    this.activeAwardIndex = index;
  }

}
