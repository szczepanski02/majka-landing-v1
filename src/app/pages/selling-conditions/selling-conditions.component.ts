import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-selling-conditions',
  templateUrl: './selling-conditions.component.html',
  styleUrls: ['./selling-conditions.component.scss']
})
export class SellingConditionsComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  sellingConditionsTranslations$: Observable<PageTranslationsModel> = this.txProvider.sellingConditionsTranslations;

  constructor(private txProvider: TranslationsProviderService) { }

  ngOnInit(): void {
  }

}
