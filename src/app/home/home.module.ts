import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeOneComponent } from './versions/home-one/home-one.component';
import { HomeTwoComponent } from './versions/home-two/home-two.component';
import { HomeThreeComponent } from './versions/home-three/home-three.component';
import { IntroOneComponent } from './intro-one/intro-one.component';
import { IntroTwoComponent } from './intro-two/intro-two.component';
import { IntroThreeComponent } from './intro-three/intro-three.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { ScreenshotComponent } from './screenshot/screenshot.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { PriceComponent } from './price/price.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { IntroPlazmComponent } from './intro-plazm/intro-plazm.component';
import { AboutPlazmComponent } from './about-plazm/about-plazm.component';
import { ForBusinessComponent } from './for-business/for-business.component';
import { ForMobileComponent } from './for-mobile/for-mobile.component';
import { ForCuratorComponent } from './for-curator/for-curator.component';
import { BlogBannerPlazmComponent } from './blog-banner-plazm/blog-banner-plazm.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    NgbModule
  ],
  declarations: [
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    IntroOneComponent,
    IntroTwoComponent,
    IntroThreeComponent,
    AboutComponent,
    FeatureComponent,
    ScreenshotComponent,
    TeamComponent,
    BlogComponent,
    PriceComponent,
    TestimonialComponent,
    ContactUsComponent,
    NewsletterComponent,
    IntroPlazmComponent,
    AboutPlazmComponent,
    ForBusinessComponent,
    ForMobileComponent,
    ForCuratorComponent,
    BlogBannerPlazmComponent
  ],
  providers: []
})
export class HomeModule { }
