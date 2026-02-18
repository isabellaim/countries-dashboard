export interface CountryName {
  common: string
  official: string
  nativeName?: {
    [key: string]: {
      official: string
      common: string
    }
  }
}

export interface CountryFlags {
  png: string
  svg: string
  alt?: string
}

export interface CountryCurrency {
  name: string
  symbol: string
}

export interface Country {
  name: CountryName
  flags: CountryFlags
  capital?: string[]
  population: number
  region: string
  subregion?: string
  languages?: {
    [key: string]: string
  }
  currencies?: {
    [key: string]: CountryCurrency
  }
  borders?: string[]
  tld?: string[]
}
