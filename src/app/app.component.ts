import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationsProviderService } from './translations-provider.service';
import { Observable, Subscription, first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean> = this.txProvider.loading;

  showLoading = false;

  constructor(
    private txProvider: TranslationsProviderService,
    private router: Router,
  ) {
    this.txProvider.langInit();
  }

  private subs = new Subscription();

  ngOnInit(): void {
    this.subs.add(this.txProvider.lang$
      .subscribe(lang => {
        this.txProvider.loadCoreTranslations(lang);
        this.txProvider.loadTranslations(lang);
      }));

    this.subs.add(this.loading$.subscribe(loading => {
      this.showLoading = true;
      if (!loading) {
        setTimeout(() => {
          this.showLoading = false;
        }, 1000);
      }
    }));
  
    this.router.events.subscribe(() => {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
