import { Country } from '../../../../shared/types/types'

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div
      className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all"
      key={country.name}>
      <img
        src={country.flag}
        className="w-full h-48 object-cover object-center"
        alt="Country Flag"
      />
      <div className="p-6">
        <div className="text-lg font-extrabold mb-4">{country.name}</div>
        {country.population && (
          <div className="">
            <span className="font-semibold">Population:</span>{' '}
            {country.population.toLocaleString('en')}
          </div>
        )}
        {country.region && (
          <div className="">
            <span className="font-semibold">Region:</span> {country.region}
          </div>
        )}
        {country.capital && (
          <div className="">
            <span className="font-semibold">Capital:</span> {country.capital}
          </div>
        )}
      </div>
    </div>
  )
}
