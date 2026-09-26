import { Component } from '@angular/core';

/**
 * Shared site footer. Extracted so home, about and projects share one copy
 * rather than each carrying its own markup, styles and social links.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  /** Derived, so the copyright never goes stale. */
  readonly year = new Date().getFullYear();

  readonly socials = [
    { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/moheedshaik' },
    { label: 'X', icon: 'fab fa-x-twitter', url: 'https://x.com' },
    { label: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
    { label: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
  ];
}
