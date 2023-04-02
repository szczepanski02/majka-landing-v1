import { homePageRoute } from './home.route';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeOurOfferComponent } from './home-our-offer/home-our-offer.component';
import { HomeOurVisionComponent } from './home-our-vision/home-our-vision.component';
import { HomeOurMissionComponent } from './home-our-mission/home-our-mission.component';
import { HomeAwardsComponent } from './home-awards/home-awards.component';
import { HomeProtectionBookComponent } from './home-protection-book/home-protection-book.component';
import { HomeFullOfferComponent } from './home-full-offer/home-full-offer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeAboutUsComponent,
    HomeOurOfferComponent,
    HomeOurVisionComponent,
    HomeOurMissionComponent,
    HomeAwardsComponent,
    HomeProtectionBookComponent,
    HomeFullOfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([homePageRoute]),
    LayoutModule
  ]
})
export class HomeModule { }
