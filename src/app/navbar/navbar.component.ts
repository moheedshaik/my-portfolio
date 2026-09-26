import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Shared site navigation. Extracted from home.component so the About page
 * (and any later page) reuses it instead of copying the markup and CSS.
 * `menuOpen` is navbar-local state, so it lives here rather than on each page.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuOpen = false;
}
