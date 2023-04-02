import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    SocialButtonsComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialButtonsComponent,
    PaginatorComponent
  ]
})
export class ComponentsModule { }
