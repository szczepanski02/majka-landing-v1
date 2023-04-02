import { Component, OnInit } from '@angular/core';
import { AccordionAnimations } from './accordion.animations';

@Component({
  selector: 'app-selling-conditions-additional-info',
  templateUrl: './selling-conditions-additional-info.component.html',
  styleUrls: ['./selling-conditions-additional-info.component.scss'],
  animations: [AccordionAnimations]
})
export class SellingConditionsAdditionalInfoComponent implements OnInit {

  isOpen = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setIsOpen(num: number): void {
    if (this.isOpen === num) {
      this.isOpen = 0;
    } else {
      this.isOpen = num;
    }
  }

}
