import { Route } from "@angular/router";
import { ContactComponent } from "./contact.component";

export const contactPageRoute: Route = {
  path: '',
  component: ContactComponent,
  data: {
    pageTitle: 'Kontakt'
  }
}