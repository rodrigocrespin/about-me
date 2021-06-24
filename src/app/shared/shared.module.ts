import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HoverClassDirective } from './hover-class.directive';

@NgModule({
  declarations: [
    HoverClassDirective
  ],
  imports: [
    CollapseModule
  ],
  exports: [
    CollapseModule,
    HoverClassDirective
  ]
})
export class SharedModule {}
