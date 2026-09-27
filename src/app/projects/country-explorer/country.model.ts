export interface Country {
  code: string; // ISO 3166-1 alpha-3, e.g. IND
  iso2: string; // lowercase alpha-2 — flagcdn.com keys its images on this
  name: string;
  region: string;
  incomeLevel: string;
  capital: string;
  population: number | null;
  populationYear: string | null;
  latitude: string;
  longitude: string;
}
