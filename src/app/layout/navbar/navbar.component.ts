import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { TranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  translations: TranslationsModel[] = [];

  private subs = new Subscription();

  constructor(private txProvider: TranslationsProviderService) {
    this.subs.add(this.txProvider.coreTranslations$
      .subscribe(tx => {
        this.translations = [...tx]
      }));
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    document.addEventListener('scroll', (evt) => {
      this.onWindowScroll();
    }, true);
  }

  onWindowScroll() {
    const navDomEl = document.querySelector('.navbar');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(navDomEl) {
        navDomEl.classList.add('navbar__scrolled');
      }
    } else {
      navDomEl?.classList.remove('navbar__scrolled');
    }
  }

  getTranslation(key: string): Observable<string> {
    return this.txProvider.getCoreTranslation(key);
  }

}
