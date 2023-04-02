import { SellingPointsComponent } from './selling-points.component';
import { Route } from "@angular/router";

export const sellingPointsRoute: Route = {
  path: '',
  component: SellingPointsComponent,
  data: {
    pageTitle: 'Punkt Sprzedaży'
  }
}