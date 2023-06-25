import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';
import { HeaderOverlays } from './../../layout/header/header.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  homeTranslations$: Observable<PageTranslationsModel> = this.txProvider.homeTranslations;

  constructor(private txProvider: TranslationsProviderService) { }

  ngOnInit(): void {
  }

  getTranslation(key: string): Observable<string> {
    return this.txProvider.getCoreTranslation(key);
  }

}
