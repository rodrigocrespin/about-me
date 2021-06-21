import { Component } from '@angular/core';

@Component({
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `
})
export class AppContainerComponent {}
