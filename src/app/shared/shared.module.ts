import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderPlazmComponent } from './header-plazm/header-plazm.component';

// Services
import { WINDOW_PROVIDERS } from './services/windows.service';
import { LandingFixService } from '../shared/services/landing-fix.service';
import { LoaderComponent } from './loader/loader.component';
import { FooterPlazmComponent } from './footer-plazm/footer-plazm.component';


@NgModule({
  exports: [
    CommonModule,
    LoaderComponent,
    HeaderPlazmComponent,
    FooterPlazmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPageScrollModule,
    NgbModule
  ],
  declarations: [
    LoaderComponent,
    HeaderPlazmComponent,
    FooterPlazmComponent
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService
  ]
})
export class SharedModule { }
