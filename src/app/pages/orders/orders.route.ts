import { OrdersComponent } from './orders.component';
import { Route } from "@angular/router";

export const ordersPageRoute: Route = {
  path: '',
  component: OrdersComponent,
  data: {
    pageTitle: 'Orders'
  }
}