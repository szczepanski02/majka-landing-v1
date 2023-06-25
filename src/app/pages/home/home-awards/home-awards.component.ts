import { Component, OnDestroy } from '@angular/core';
import { TranslationsProviderService } from 'src/app/translations-provider.service';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'app-home-awards',
  templateUrl: './home-awards.component.html',
  styleUrls: ['./home-awards.component.scss']
})
export class HomeAwardsComponent implements OnDestroy {

  awards: AwardModel[] = [];
  activeAwardIndex: number = 0;

  private subs = new Subscription();
  
  constructor(private txProvider: TranslationsProviderService) {
    this.subs.add(this.txProvider.lang$
      .subscribe(lang => {
        this.getAwards(lang);
      }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setActiveAward(index: number): void {
    this.activeAwardIndex = index;
  }

  private getAwards(lang: string): void {
    this.subs.add(this.txProvider.getAwards(lang)
      .pipe(first())
      .subscribe(result => this.awards = [...result]));
  }

}

export interface AwardModel {
  title: string;
  content: string;
  image: string;
}