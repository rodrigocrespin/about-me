import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeSectionComponent } from './sections/about-me-section/about-me-section.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutMeSectionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
