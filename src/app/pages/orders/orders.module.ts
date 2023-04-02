import { ordersPageRoute } from './orders.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([ordersPageRoute])
  ]
})
export class OrdersModule { }
