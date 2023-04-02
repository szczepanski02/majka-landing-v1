import { ReactiveFormsModule } from '@angular/forms';
import { offerPageRoute } from './offer.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { RouterModule } from '@angular/router';
import { OfferService } from './offer.service';
import { OfferToolsBarComponent } from './offer-tools-bar/offer-tools-bar.component';
import { OfferGridComponent } from './offer-grid/offer-grid.component';
import { OfferItemComponent } from './offer-item/offer-item.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    OfferComponent,
    OfferToolsBarComponent,
    OfferGridComponent,
    OfferItemComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    RouterModule.forChild([offerPageRoute]),
    ReactiveFormsModule
  ],
  providers: [
    OfferService
  ]
})
export class OfferModule { }
