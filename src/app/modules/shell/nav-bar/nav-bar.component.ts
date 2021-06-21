import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  pageYOffset = window.pageYOffset;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.pageYOffset = window.pageYOffset;
  }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }

  scrollToDownload(element: any): void {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
