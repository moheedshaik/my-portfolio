import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  /**
   * Placeholder projects — swap the copy, links and `tint` for real ones.
   * `layout` picks which mock UI the thumbnail draws.
   */
  readonly projects = [
    {
      name: 'Atlas',
      stack: 'Angular · RxJS · World Bank API',
      tint: '#2563eb',
      layout: 'grid',
      description:
        'Browse 217 countries with live population data. Joins two World Bank endpoints with forkJoin, filters out the regional aggregates they mix into the results, and falls back to a cached snapshot if the API is down.',
      github: '',
      demo: '/projects/countries',
    },
    {
      name: 'Consent Manager',
      stack: 'Angular · Java · PostgreSQL',
      tint: '#e8920c',
      layout: 'dashboard',
      description:
        'Consent management platform for capturing and tracking user permissions. Supports versioned purposes, audit trails and multi-tenant reporting.',
      github: 'https://github.com/moheedshaik',
      demo: '',
    },
    {
      name: 'Notice Registry',
      stack: 'Angular · Node.js',
      tint: '#0891b2',
      layout: 'editor',
      description:
        'Registry for building and publishing privacy notices. Includes a rich-text editor, live preview and an embeddable snippet generator.',
      github: 'https://github.com/moheedshaik',
      demo: 'https://example.com',
    },
    {
      name: 'Design System',
      stack: 'TypeScript · SCSS · Storybook',
      tint: '#7c5cff',
      layout: 'grid',
      description:
        'Reusable component library with design tokens, theming and accessibility baked in. Documented in Storybook and consumed across several apps.',
      github: 'https://github.com/moheedshaik',
      demo: 'https://example.com',
    },
    {
      name: 'Task Tracker',
      stack: 'Angular · Firebase',
      tint: '#16a34a',
      layout: 'board',
      description:
        'Kanban-style task board with drag-and-drop, real-time sync and offline support. Built to learn Firestore and optimistic UI updates.',
      github: 'https://github.com/moheedshaik',
      demo: 'https://example.com',
    },
    {
      name: 'Weather Dashboard',
      stack: 'Angular · REST APIs',
      tint: '#e11d48',
      layout: 'dashboard',
      description:
        'Location-aware weather dashboard with hourly forecasts, saved places and charts. Uses caching to stay within third-party rate limits.',
      github: 'https://github.com/moheedshaik',
      demo: 'https://example.com',
    },
    {
      name: 'Portfolio v2',
      stack: 'Angular',
      tint: '#d97706',
      layout: 'editor',
      description:
        'This site. A fully responsive portfolio built with standalone components, CSS custom-property theming and hand-drawn SVG illustrations.',
      github: 'https://github.com/moheedshaik/my-portfolio',
      demo: '',
    },
  ];
}
