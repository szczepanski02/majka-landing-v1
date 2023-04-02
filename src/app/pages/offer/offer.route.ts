import { OfferComponent } from './offer.component';
import { Route } from "@angular/router";

export const offerPageRoute: Route = {
  path: '',
  component: OfferComponent,
  data: {
    pageTitle: 'Offer'
  }
}