import { ChangeDetectionStrategy, Component } from '@angular/core';

interface SkillModel {
  description: string;
  imgUrl?: string;
  textSize?: 'default'|'small';
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsSectionComponent {
  skills: SkillModel[] = [
    { description: '.NET 5', imgUrl: 'assets/img/dotnet.svg' },
    { description: 'Angular', imgUrl: 'assets/img/angular.png' },
    { description: 'Docker', imgUrl: 'assets/img/docker.png' },
    { description: 'NgRx', imgUrl: 'assets/img/ngrx.svg' },
    { description: 'RabbitMQ', imgUrl: 'assets/img/rabbitmq.svg', textSize: 'small' },
    { description: 'MySQL', imgUrl: 'assets/img/mysql.png' },
    { description: 'MongoDb', imgUrl: 'assets/img/mongo.png', textSize: 'small' },
    { description: 'Git', imgUrl: 'assets/img/git.png' },
  ];
}
