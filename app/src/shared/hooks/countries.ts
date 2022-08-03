import { useQuery } from '@tanstack/react-query'
import { getCountries, getCountry } from '../../api/api'
import { Country, CountryFilter } from '../types/types'

export const useCountries = (filter: CountryFilter | undefined = undefined) => {
  return useQuery<[Country] | []>(['countries', filter?.region, filter?.name], () =>
    getCountries(filter)
  )
}

export const useCountryAlpha3 = (alpha3: string) => {
  return useQuery<Country | null>(['country', alpha3], () => getCountry(alpha3))
}
