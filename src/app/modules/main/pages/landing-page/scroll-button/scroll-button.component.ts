import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  template: `
    <div class="w-100 d-flex flex-column align-items-center">
      <a class="show-animate"
        (click)="scrollIntoView()"
        [ngStyle]="{ background: 'linear-gradient(0deg, ' + gradientA + ' 0%, ' + gradientB + ' 100%)' }">
        <i class="tim-icons icon-minimal-down"></i>
      </a>
    </div>
  `,
  styleUrls: ['./scroll-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollButtonComponent {
  @Input() gradientA = '#ec250d';
  @Input() gradientB = '#fd5d93';
  @Input() scrollToTop?: number;

  scrollIntoView(): void {
    if (!this.scrollToTop) {
      return;
    }
    window.scrollTo({ top: this.scrollToTop, behavior: 'smooth' });
  }
}
