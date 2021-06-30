import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeSectionComponent } from './sections/about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
