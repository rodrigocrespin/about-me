import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {

  constructor(private elementRef: ElementRef) { }

  // tslint:disable-next-line:no-input-rename
  @Input('appHoverClass') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}