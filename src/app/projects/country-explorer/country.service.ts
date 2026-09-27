import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map } from 'rxjs';
import { Country } from './country.model';

const META_URL =
  'https://api.worldbank.org/v2/country?format=json&per_page=400';
const POPULATION_URL =
  'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&mrnev=1&per_page=400';
const FALLBACK_URL = 'assets/data/countries-fallback.json';

/** Every World Bank response is [pagingMeta, rows]. */
type Paged<T> = [unknown, T[]];

interface MetaRow {
  id: string;
  iso2Code: string;
  name: string;
  region: { value: string };
  incomeLevel: { value: string };
  capitalCity: string;
  latitude: string;
  longitude: string;
}

interface PopulationRow {
  countryiso3code: string;
  value: number | null;
  date: string;
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private readonly http = inject(HttpClient);

  /**
   * Country metadata and population are separate World Bank endpoints, so both
   * are fetched together and joined on the ISO-3 code. If either call fails the
   * page falls back to a snapshot committed under assets — a portfolio demo
   * showing an empty list because an upstream API blipped is worse than stale
   * numbers.
   */
  load(): Observable<Country[]> {
    return forkJoin({
      meta: this.http.get<Paged<MetaRow>>(META_URL),
      population: this.http.get<Paged<PopulationRow>>(POPULATION_URL),
    }).pipe(
      map(({ meta, population }) => join(meta[1], population[1])),
      catchError(() => this.http.get<Country[]>(FALLBACK_URL)),
    );
  }
}

function join(meta: MetaRow[], population: PopulationRow[]): Country[] {
  const byCode = new Map(population.map((row) => [row.countryiso3code, row]));

  return meta
    // The endpoint mixes real countries with roll-ups like "Sub-Saharan Africa",
    // which the API marks by putting "Aggregates" in the region field.
    .filter((row) => row.region?.value && row.region.value !== 'Aggregates')
    .map((row) => ({
      code: row.id,
      iso2: row.iso2Code.toLowerCase(),
      name: row.name,
      region: row.region.value.trim(),
      incomeLevel: row.incomeLevel.value.trim(),
      capital: row.capitalCity,
      population: byCode.get(row.id)?.value ?? null,
      populationYear: byCode.get(row.id)?.date ?? null,
      latitude: row.latitude,
      longitude: row.longitude,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
