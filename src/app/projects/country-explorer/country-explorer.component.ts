import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { Country } from './country.model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country-explorer',
  standalone: true,
  imports: [DecimalPipe, NavbarComponent, FooterComponent],
  templateUrl: './country-explorer.component.html',
  styleUrls: ['./country-explorer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryExplorerComponent implements OnInit {
  private readonly countryService = inject(CountryService);

  readonly countries = signal<Country[]>([]);
  readonly selected = signal<Country | null>(null);
  readonly loading = signal(true);

  /** Placeholder rows so the list reserves its height while loading. */
  readonly skeletonRows = Array.from({ length: 12 });

  ngOnInit(): void {
    this.countryService.load().subscribe((countries) => {
      this.countries.set(countries);
      this.selected.set(countries.find((c) => c.code === 'IND') ?? countries[0]);
      this.loading.set(false);
    });
  }

  select(country: Country): void {
    this.selected.set(country);
  }

  flag(country: Country, width: 40 | 320): string {
    return `https://flagcdn.com/w${width}/${country.iso2}.png`;
  }
}
