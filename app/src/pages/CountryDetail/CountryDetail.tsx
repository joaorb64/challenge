import { Link, useParams } from 'react-router-dom'
import { Button } from '../../shared/components/Button/Button'
import { Error } from '../../shared/components/Error/Error'
import { Loader } from '../../shared/components/Loader/Loader'
import { useCountryAlpha3 } from '../../shared/hooks/countries'

export const CountryDetail = () => {
  const { country: alpha3 = '' } = useParams()
  const { data: country, isLoading, isError } = useCountryAlpha3(alpha3 || '')

  const labels = [
    [
      ['Native Name', country?.nativeName],
      ['Population', country?.population.toLocaleString('en')],
      ['Region', country?.region],
      ['Sub Region', country?.subregion],
      ['Capital', country?.capital]
    ],
    [
      ['Top Level Domain', country?.topLevelDomain.join(', ')],
      ['Currencies', country?.currencies.map((curr) => curr.name).join(', ')],
      ['Languages', country?.languages.map((lang) => lang.name).join(', ')]
    ]
  ]

  return (
    <div>
      <div className="mb-16">
        <Link to={'/'}>
          <Button>
            <div className="flex gap-2">
              <span className="material-icons">arrow_back</span>
              <span>Back</span>
            </div>
          </Button>
        </Link>
      </div>
      {isLoading && <Loader />}
      {isError && <Error message={'Could not find country :('} />}
      {country && (
        <div className="flex w-full md:gap-24 gap-0 flex-col md:flex-row">
          <img
            src={country?.flag}
            className="w-full md:w-5/12 h-auto object-contain object-center"
            alt="Country Flag"
          />
          <div className="p-6 flex flex-column flex-wrap">
            <div className="text-3xl font-extrabold my-8 w-full">{country?.name}</div>
            <div className="flex flex-col md:flex-row flex-wrap w-full gap-8">
              {labels.map((group) => (
                <div className="flex-grow">
                  {group.map(
                    ([label, value]) =>
                      value && (
                        <div className="my-2 flex-grow">
                          <span className="font-semibold">{label}:</span> {value}
                        </div>
                      )
                  )}
                </div>
              ))}
            </div>
            {country?.borderCountries && (
              <div className="flex items-center gap-4 flex-wrap w-full mt-16">
                <div className="font-semibold">Border Countries:</div>
                {country?.borderCountries.map((c) => (
                  <Link to={'/' + c.alpha3Code}>
                    <Button>{c.name}</Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
