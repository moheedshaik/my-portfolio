import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  /** `icon` values are devicon classes (see index.html). */
  readonly skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
  ];

  readonly tools = [
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'IntelliJ', icon: 'devicon-intellij-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Google Chrome', icon: 'devicon-chrome-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
  ];

}
