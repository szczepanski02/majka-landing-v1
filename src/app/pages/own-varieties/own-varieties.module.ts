import { ownVarietiesPageRoute } from './own-varieties.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnVarietiesComponent } from './own-varieties.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { OwnVarietiesItemLeftTextComponent } from './own-varieties-item-left-text/own-varieties-item-left-text.component';
import { OwnVarietiesItemRightTextComponent } from './own-varieties-item-right-text/own-varieties-item-right-text.component';
import { OwnVarietiesService } from './own-varieties.service';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    OwnVarietiesComponent,
    OwnVarietiesItemLeftTextComponent,
    OwnVarietiesItemRightTextComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    RouterModule.forChild([ownVarietiesPageRoute])
  ],
  providers: [
    OwnVarietiesService
  ]
})
export class OwnVarietiesModule { }
