import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    // Lazy — the country data and this page's markup only matter if you open the demo.
    path: 'projects/countries',
    loadComponent: () =>
      import('./projects/country-explorer/country-explorer.component').then(
        (m) => m.CountryExplorerComponent,
      ),
  },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
