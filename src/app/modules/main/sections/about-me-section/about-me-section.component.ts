import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ExperienceItem {
  iconClass: string;
  description: string;
}

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeSectionComponent {
  experienceItems: ExperienceItem[] = [
    { iconClass: 'tim-icons icon-vector', description: 'Experience working with Gitflow, SCRUM project methodology' },
    { iconClass: 'tim-icons icon-tv-2', description: 'I love having challenging personal projects' },
    { iconClass: 'tim-icons icon-single-02', description: 'I am used to work in teams and help teammates' },
    {
      iconClass: 'fa fa-globe',
      description: 'I have experience working with foreign companies and speaking in english with clients'
    },
  ];
}
