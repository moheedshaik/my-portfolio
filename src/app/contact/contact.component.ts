import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  /** Swap for the real address — it drives both the link and the form. */
  readonly email = 'moheed@example.com';

  readonly details = [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: this.email, url: `mailto:${this.email}` },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com', url: 'https://linkedin.com' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/moheedshaik', url: 'https://github.com/moheedshaik' },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'India', url: '' },
  ];

  /**
   * No backend here: build a mailto: so the visitor's mail client opens with
   * the message prefilled. To use a real form service later, POST these same
   * values to its endpoint instead.
   */
  send(name: string, from: string, message: string): void {
    const subject = `Portfolio enquiry from ${name || 'someone'}`;
    const body = `${message}\n\n—\n${name}\n${from}`;
    window.location.href =
      `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
