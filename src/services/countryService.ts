import { Country } from '../types/country'

const BASE_URL = 'https://restcountries.com/v3.1'

const FIELDS = 'name,flags,capital,population,region,subregion,languages,currencies,borders,tld'

/*Para obtener todos los países*/
export async function getAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/all?fields=${FIELDS}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data: Country[] = await response.json()
    return data
  } catch (error) {
    console.error('Error obteniendo todos los países:', error)
    throw error
  }
}

/*Buscar país por nombre*/
export async function searchCountryByName(name: string): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}?fields=${FIELDS}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data: Country[] = await response.json()
    return data
  } catch (error) {
    console.error(`Error buscando país "${name}":`, error)
    throw error
  }
}

/*Para filtrar países por región*/
export async function getCountriesByRegion(region: string): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/region/${region}?fields=${FIELDS}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    const data: Country[] = await response.json()
    return data
  } catch (error) {
    console.error(`Error buscando países en "${region}":`, error)
    throw error
  }
}