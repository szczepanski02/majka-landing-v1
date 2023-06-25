import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  contactTranslations$: Observable<PageTranslationsModel> = this.txProvider.contactTranslations;

  constructor(private txProvider: TranslationsProviderService) { }

  ngOnInit(): void {
  }

}
