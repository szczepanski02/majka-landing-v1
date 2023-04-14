import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SocialButtonsComponent,
    PaginatorComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SocialButtonsComponent,
    PaginatorComponent,
    DropdownComponent
  ]
})
export class ComponentsModule { }
