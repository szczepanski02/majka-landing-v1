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
import { OfferItemHoverBoxComponent } from './offer-item-hover-box/offer-item-hover-box.component';
import { OfferItemDetailsTextComponent } from './offer-item-details-text/offer-item-details-text.component';
import { OfferItemDetailsGalleryComponent } from './offer-item-details-gallery/offer-item-details-gallery.component';
import { OfferItemDetailsDialogComponent } from './offer-item-details-dialog/offer-item-details-dialog.component';
import { OfferItemDetailsDialogService } from './offer-item-details-dialog/offer-item-details-dialog.service';



@NgModule({
  declarations: [
    OfferComponent,
    OfferToolsBarComponent,
    OfferGridComponent,
    OfferItemComponent,
    OfferItemHoverBoxComponent,
    OfferItemDetailsTextComponent,
    OfferItemDetailsGalleryComponent,
    OfferItemDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    RouterModule.forChild([offerPageRoute]),
    ReactiveFormsModule
  ],
  providers: [
    OfferService,
    OfferItemDetailsDialogService
  ]
})
export class OfferModule { }
