import { Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

/**
 * Owns the light/dark choice. The initial value is NOT decided here — the
 * inline script in index.html has already stamped data-theme before first
 * paint, so this reads that attribute rather than re-deciding and risking a
 * mismatch with what the user is already looking at.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly current = signal<Theme>(this.read());

  readonly theme = this.current.asReadonly();

  toggle(): void {
    this.set(this.current() === 'dark' ? 'light' : 'dark');
  }

  /** Page colours the browser paints its own chrome with, per mode. */
  private static readonly CHROME = { light: '#cfeaff', dark: '#0a0a0c' };

  private set(theme: Theme): void {
    this.current.set(theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Keep the browser's UI tint in step with the page.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', ThemeService.CHROME[theme]);

    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* Private mode can throw. The attribute is still set, so the choice
         holds for this page view — it just will not survive a reload. */
    }
  }

  private read(): Theme {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light';
  }
}
