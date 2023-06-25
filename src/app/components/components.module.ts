import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { LoadingFullscreenComponent } from './loading-fullscreen/loading-fullscreen.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [
    SocialButtonsComponent,
    PaginatorComponent,
    DropdownComponent,
    LoadingFullscreenComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SocialButtonsComponent,
    PaginatorComponent,
    DropdownComponent,
    LoadingFullscreenComponent,
    LoadingIndicatorComponent,
  ]
})
export class ComponentsModule { }
