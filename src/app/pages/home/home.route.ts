import { HomeComponent } from './home.component';
import { Route } from "@angular/router";

export const homePageRoute: Route = {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: ''
  }
}