import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';
import { LangSelectorComponent } from './navbar/lang-selector/lang-selector.component';
import { MobileLangSelectorComponent } from './navbar-mobile/mobile-lang-selector/mobile-lang-selector.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent,
    LangSelectorComponent,
    MobileLangSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
