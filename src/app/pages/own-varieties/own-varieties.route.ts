import { OwnVarietiesComponent } from './own-varieties.component';
import { Route } from "@angular/router";

export const ownVarietiesPageRoute: Route = {
  path: '',
  component: OwnVarietiesComponent,
  data: {
    pageTitle: 'Orders'
  }
}