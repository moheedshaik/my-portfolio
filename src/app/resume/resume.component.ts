import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  /** Drop the real PDF at this path to make the download button work. */
  readonly cvUrl = 'assets/resume/shaik-moheed-cv.pdf';

  readonly contact = [
    { icon: 'fa-solid fa-envelope', text: 'moheed@example.com' },
    { icon: 'fa-solid fa-location-dot', text: 'India' },
    { icon: 'fab fa-github', text: 'github.com/moheedshaik' },
  ];

  /** Placeholder dates and bullets — swap for the real history. */
  readonly experience = [
    {
      role: 'Software Engineer',
      company: 'Certinal',
      period: '2022 — Present',
      points: [
        'Build and maintain consent-management features across an Angular front end and a Java service layer.',
        'Ship reusable UI components and design tokens adopted by several internal applications.',
        'Work on internationalisation, covering 30 locales with automated key-parity checks.',
        'Improve page performance and bundle size through lazy loading and change-detection tuning.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Placeholder Company',
      period: '2021 — 2022',
      points: [
        'Built internal dashboards with Angular and consumed REST APIs for reporting.',
        'Wrote unit tests and helped raise coverage on the shared component library.',
      ],
    },
  ];

  readonly education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Electronics and Communication Engineering',
      school: 'Placeholder University',
      period: '2017 — 2021',
    },
  ];

  readonly skillGroups = [
    { title: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'RxJS'] },
    { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL'] },
    { title: 'Tools', items: ['Git', 'Docker', 'Storybook', 'Postman', 'Jira', 'VS Code'] },
  ];

  readonly certifications = [
    'Placeholder certification — add your real ones here',
    'Placeholder course or award',
  ];
}
