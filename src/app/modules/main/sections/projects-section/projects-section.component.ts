import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface ProjectsModel {
  projects: Project[];
  current?: Project;
}

interface Project {
  id: string;
  name: string;
  imgUrl: string;
  description?: string;
}

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSectionComponent {
  model$: Observable<ProjectsModel>;
  private loadProjectSubject = new Subject<number>();

  constructor() {
    const projects$ = of([
      { id: 'SP', name: 'Logistics management system', imgUrl: 'assets/img/sp_main.png' },
      { id: 'DMA', name: 'Stocks DMA', imgUrl: 'assets/img/dma_1.png' },
    ] as Project[]);
    const currentIndex$ = this.loadProjectSubject.pipe(startWith(0));
    this.model$ = combineLatest([projects$, currentIndex$]).pipe(
      map(([projects, currentIndex]) => ({
        projects, current: projects[currentIndex]
      }))
    );
  }

  slideChange(slideNumber: number): void {
    this.loadProjectSubject.next(slideNumber);
  }
}
