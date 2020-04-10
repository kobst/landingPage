import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManifestoRoutingModule } from './manifesto-routing.module';
import { ManifestoHomeComponent } from './manifesto-home/manifesto-home.component';
import { ManifestoIntroComponent } from './manifesto-intro/manifesto-intro.component';


@NgModule({
    imports: [
        CommonModule,
        ManifestoRoutingModule
    ],
    declarations: [
        ManifestoHomeComponent,
        ManifestoIntroComponent
    ]
})
export class ManifestoModule { }