import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    ComponentsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
