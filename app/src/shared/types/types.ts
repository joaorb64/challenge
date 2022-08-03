type Currency = {
  code: string
  name: string
  symbol: string
}

type Language = {
  name: string
}

export type Country = {
  alpha3Code: string
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string
  topLevelDomain: [string]
  currencies: [Currency]
  languages: [Language]
  borders: [string]
  borderCountries?: [Country]
  flag: string
}

export type CountryFilter = {
  name?: string | undefined
  region?: string | null
}

export enum Regions {
  AFRICA = 'Africa',
  AMERICAS = 'Americas',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania'
}
