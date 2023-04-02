import { contactPageRoute } from './contact.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactPersonsComponent } from './contact-persons/contact-persons.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormService } from './contact-form/contact-form.service';



@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactPersonsComponent,
    ContactMapComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    GoogleMapsModule,
    RouterModule.forChild([contactPageRoute]),
    ReactiveFormsModule,
  ],
  providers: [
    ContactFormService
  ]
})
export class ContactModule { }
