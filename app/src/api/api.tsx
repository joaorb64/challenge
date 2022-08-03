import axios from 'axios'
import { Country, CountryFilter } from '../shared/types/types'

export const getCountries = async (filter: CountryFilter | undefined): Promise<[Country] | []> => {
  const BASE_URL = filter && filter.name ? '/name/' + filter.name : '/all'

  let { data } = await axios.get(process.env.REACT_APP_API + BASE_URL)

  if (data && filter?.region) {
    data = data.filter((e: Country) => {
      return e.region == filter.region
    })
  }

  return data
}

export const getCountry = async (alpha3: string): Promise<Country | null> => {
  const { data } = await axios.get(process.env.REACT_APP_API + '/alpha/' + alpha3)

  if (data?.borders) {
    let mergedCodes = data.borders.join(',')

    const { data: borderData } = await axios.get(
      process.env.REACT_APP_API + '/alpha/?codes=' + mergedCodes
    )

    data.borderCountries = borderData
  }

  return data
}
