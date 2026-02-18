import { Country } from '../types/country'

const BASE_URL = 'https://restcountries.com/v3.1'

// Campos necesarios: bandera, nombre, capital, población, región, nombre nativo, idiomas, monedas, fronteras, subregión, dominio
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
    console.error('Error fetching all countries:', error)
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
    console.error(`Error searching country by name "${name}":`, error)
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
    console.error(`Error fetching countries by region "${region}":`, error)
    throw error
  }
}