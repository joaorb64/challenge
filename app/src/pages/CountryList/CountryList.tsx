import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Error } from '../../shared/components/Error/Error'
import { Loader } from '../../shared/components/Loader/Loader'
import { AppContext } from '../../shared/context/AppContext'
import { useCountries } from '../../shared/hooks/countries'
import { CountryCard } from './components/CountryCard/CountryCard'
import { RegionSelect } from './components/RegionSelect/RegionSelect'

export const CountryList = () => {
  const { search, setSearch, selectedRegion } = useContext(AppContext)

  let { data, isError, isLoading } = useCountries({
    name: search,
    region: selectedRegion
  })

  return (
    <div>
      <div className="w-full flex mb-16 md:justify-between flex-col md:flex-row gap-8">
        <div className="border-solid border-x border-y border-very_light_gray shadow-md rounded-md bg-white transition-all relative w-full xl:w-1/3 md:w-3/5">
          <div className="material-icons absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none text-dark_gray">
            search
          </div>
          <input
            className="p-4 pl-20 px-8 w-full font-semibold"
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <RegionSelect className="md:w-60 w-full" />
      </div>

      {isLoading && <Loader />}
      {isError && <Error message={"Couldn't find any countries using the current filters :("} />}

      <div className="container grid gap-20 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data?.map((country) => {
          return (
            <Link to={'/' + country.alpha3Code}>
              <CountryCard country={country} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
