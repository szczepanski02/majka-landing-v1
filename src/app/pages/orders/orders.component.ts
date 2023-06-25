import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderOverlays } from 'src/app/layout/header/header.component';
import { PageTranslationsModel, TranslationsProviderService } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  orderTranslations$: Observable<PageTranslationsModel> = this.txProvider.ordersTranslations;

  constructor(private txProvider: TranslationsProviderService) { }

  ngOnInit(): void {
  }

}
