import { AfterViewInit, Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../theme.service';

/**
 * Shared site navigation: a text header on desktop, a fixed bottom tab bar
 * on phones. Both render every time — which one shows is a media query, so
 * there is no state to track and nothing to toggle open or closed.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly themes = inject(ThemeService);
  readonly theme = this.themes.theme;

  /**
   * Home and About are one route — '/' with a fragment — so routerLinkActive
   * cannot separate them and lights Home for both. Which of the two is
   * current is a scroll position, so it is observed rather than routed.
   *
   * Read once: every page renders its own navbar, so this instance never
   * outlives the route it was created on.
   */
  private readonly isHome = inject(Router).url.split(/[#?]/)[0] === '/';
  private readonly aboutInView = signal(false);
  private observer?: IntersectionObserver;

  readonly homeActive = computed(() => this.isHome && !this.aboutInView());
  readonly aboutActive = computed(() => this.isHome && this.aboutInView());

  ngAfterViewInit(): void {
    const about = document.getElementById('about');
    if (!about) return;

    // Negative margins leave a thin band across the middle of the viewport.
    // The tab flips when the section takes over the screen rather than when
    // its first pixel appears, which would light About while the hero is
    // still the thing being looked at.
    this.observer = new IntersectionObserver(
      ([entry]) => this.aboutInView.set(entry.isIntersecting),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    this.observer.observe(about);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleTheme(): void {
    this.themes.toggle();
  }
}
