import { LayoutModule } from 'src/app/layout/layout.module';
import { sellingPointsRoute } from './selling-points.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellingPointsComponent } from './selling-points.component';
import { RouterModule } from '@angular/router';
import { SellingPointsBasicInfoComponent } from './selling-points-basic-info/selling-points-basic-info.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SellingPointsMapComponent } from './selling-points-map/selling-points-map.component';
import { SellingPointsWeekRecommendationComponent } from './selling-points-week-recommendation/selling-points-week-recommendation.component';



@NgModule({
  declarations: [
    SellingPointsComponent,
    SellingPointsBasicInfoComponent,
    SellingPointsMapComponent,
    SellingPointsWeekRecommendationComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([sellingPointsRoute]),
    GoogleMapsModule
  ]
})
export class SellingPointsModule { }
