import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HoverClassDirective } from './hover-class.directive';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    HoverClassDirective
  ],
  imports: [
    CollapseModule,
    CarouselModule
  ],
  exports: [
    CollapseModule,
    CarouselModule,
    HoverClassDirective
  ]
})
export class SharedModule {}
