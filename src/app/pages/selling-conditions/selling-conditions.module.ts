import { LayoutModule } from 'src/app/layout/layout.module';
import { sellingConditionsRoute } from './selling-conditions.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellingConditionsComponent } from './selling-conditions.component';
import { RouterModule } from '@angular/router';
import { SellingConditionsTransportComponent } from './selling-conditions-transport/selling-conditions-transport.component';
import { SellingConditionsPricesComponent } from './selling-conditions-prices/selling-conditions-prices.component';
import { SellingConditionsAdditionalInfoComponent } from './selling-conditions-additional-info/selling-conditions-additional-info.component';



@NgModule({
  declarations: [
    SellingConditionsComponent,
    SellingConditionsTransportComponent,
    SellingConditionsPricesComponent,
    SellingConditionsAdditionalInfoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([sellingConditionsRoute])
  ]
})
export class SellingConditionsModule { }
