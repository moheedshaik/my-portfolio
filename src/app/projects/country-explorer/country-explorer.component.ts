import { DecimalPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import createGlobe, { Globe } from 'cobe';
import { Country } from './country.model';
import { CountryService } from './country.service';

/** Render size in CSS pixels; the canvas is scaled to fit by CSS. */
const GLOBE_SIZE = 360;

@Component({
  selector: 'app-country-explorer',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-explorer.component.html',
  styleUrls: ['./country-explorer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryExplorerComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly countryService = inject(CountryService);
  private readonly zone = inject(NgZone);

  @ViewChild('globeCanvas') private globeCanvas?: ElementRef<HTMLCanvasElement>;

  readonly countries = signal<Country[]>([]);
  readonly selected = signal<Country | null>(null);
  readonly loading = signal(true);

  readonly regionCount = computed(
    () => new Set(this.countries().map((c) => c.region)).size,
  );

  /** Placeholder rows so the list reserves its height while loading. */
  readonly skeletonRows = Array.from({ length: 12 });

  private globe?: Globe;
  private frame = 0;
  /** Where the globe is now, and where the current selection wants it. */
  private phi = 0;
  private theta = 0.3;
  private targetPhi = 0;
  private targetTheta = 0.3;
  private marker: [number, number] = [20, 78];

  ngOnInit(): void {
    this.countryService.load().subscribe((countries) => {
      this.countries.set(countries);
      this.loading.set(false);
      this.select(countries.find((c) => c.code === 'IND') ?? countries[0]);
    });
  }

  ngAfterViewInit(): void {
    this.createGlobe();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
    this.globe?.destroy();
  }

  select(country: Country): void {
    this.selected.set(country);

    const lat = Number(country.latitude);
    const lng = Number(country.longitude);
    // A handful of entries ship blank coordinates; leave the globe where it is.
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return;
    }

    this.marker = [lat, lng];
    this.targetTheta = (lat * Math.PI) / 180;
    // Turn the globe the short way round rather than unwinding through 0.
    // Derived from cobe's own projection: a marker sits dead centre when
    // phi = -lng - PI/2 and theta = lat (both in radians).
    const desired = -((lng * Math.PI) / 180) - Math.PI / 2;
    const turn = ((desired - this.phi + Math.PI) % (Math.PI * 2)) - Math.PI;
    this.targetPhi = this.phi + (turn < -Math.PI ? turn + Math.PI * 2 : turn);
  }

  flag(country: Country, width: 40 | 320): string {
    return `https://flagcdn.com/w${width}/${country.iso2}.png`;
  }

  private createGlobe(): void {
    const canvas = this.globeCanvas?.nativeElement;
    if (!canvas) {
      return;
    }

    // The loop runs every frame; inside Angular's zone that would trigger
    // change detection 60 times a second for an animation nothing binds to.
    this.zone.runOutsideAngular(() => {
      this.globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: GLOBE_SIZE * 2,
        height: GLOBE_SIZE * 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 1.1,
        mapSamples: 16000,
        mapBrightness: 5.4,
        baseColor: [0.92, 0.94, 1],
        markerColor: [0.36, 0.3, 0.95],
        glowColor: [0.86, 0.9, 1],
        markers: [],
      });

      const tick = () => {
        // Ease toward the selected country instead of snapping to it.
        this.phi += (this.targetPhi - this.phi) * 0.055;
        this.theta += (this.targetTheta - this.theta) * 0.055;
        this.globe?.update({
          phi: this.phi,
          theta: this.theta,
          markers: [{ location: this.marker, size: 0.08 }],
        });
        this.frame = requestAnimationFrame(tick);
      };
      this.frame = requestAnimationFrame(tick);
    });
  }
}
