import { SellingConditionsComponent } from './selling-conditions.component';
import { Route } from "@angular/router";

export const sellingConditionsRoute: Route = {
  path: '',
  component: SellingConditionsComponent,
  data: {
    pageTitle: 'Warunki Sprzedaży'
  }
}