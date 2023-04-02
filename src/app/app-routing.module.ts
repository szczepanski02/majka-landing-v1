import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./pages/offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'own-varieties',
    loadChildren: () => import('./pages/own-varieties/own-varieties.module').then(m => m.OwnVarietiesModule)
  },
  {
    path: 'selling-conditions',
    loadChildren: () => import('./pages/selling-conditions/selling-conditions.module').then(m => m.SellingConditionsModule)
  },
  {
    path: 'selling-points',
    loadChildren: () => import('./pages/selling-points/selling-points.module').then(m => m.SellingPointsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
