import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccordionAnimations } from './accordion.animations';
import { TranslationsProviderService } from 'src/app/translations-provider.service';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'app-selling-conditions-additional-info',
  templateUrl: './selling-conditions-additional-info.component.html',
  styleUrls: ['./selling-conditions-additional-info.component.scss'],
  animations: [AccordionAnimations]
})
export class SellingConditionsAdditionalInfoComponent implements OnInit, OnDestroy {

  isOpen = 0;
  items: SellingConditionAddonModel[] = [];

  private subs = new Subscription();

  constructor(
    private txProvider: TranslationsProviderService,
  ) {
    this.subs.add(this.txProvider.lang$
      .subscribe(lang => this.load(lang)));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setIsOpen(num: number): void {
    if (this.isOpen === num) {
      this.isOpen = 0;
    } else {
      this.isOpen = num;
    }
  }
  
  private load(lang: string): void {
    this.subs.add(this.txProvider.getSellingConditionsAddition(lang)
      .pipe(first())
      .subscribe(items => this.items = items));
  }

}

export interface SellingConditionAddonModel {
  name: string;
  content: string;
  id: number;
}