import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

interface ProjectsModel {
  projects: Project[];
  current?: Project;
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

  constructor(private projectsService: ProjectsService) {
    const currentIndex$ = this.loadProjectSubject.pipe(startWith(0));
    this.model$ = combineLatest([projectsService.get(), currentIndex$]).pipe(
      map(([projects, currentIndex]) => ({
        projects, current: projects[currentIndex]
      }))
    );
  }

  slideChange(slideNumber: number): void {
    this.loadProjectSubject.next(slideNumber);
  }
}
