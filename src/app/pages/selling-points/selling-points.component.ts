import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-selling-points',
  templateUrl: './selling-points.component.html',
  styleUrls: ['./selling-points.component.scss']
})
export class SellingPointsComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  sellingPointsTranslations$: Observable<PageTranslationsModel> = this.txProvider.sellingPointsTranslations;
  
  constructor(
    private txProvider: TranslationsProviderService,
  ) { }

  ngOnInit(): void {
  }

}
