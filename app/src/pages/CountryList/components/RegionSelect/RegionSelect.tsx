import { useContext, useState } from 'react'
import { AppContext } from '../../../../shared/context/AppContext'
import { Regions } from '../../../../shared/types/types'

interface Props {
  className?: string
}

export const RegionSelect = ({ className }: Props) => {
  const { search, setSearch, selectedRegion, setSelectedRegion } = useContext(AppContext)
  const [open, setOpen] = useState(false)

  return (
    <div className={'flex relative cursor-pointer' + ' ' + className}>
      <button
        className="border-solid border-x border-y border-very_light_gray shadow-md rounded-md bg-white transition-all px-8 py-4 pr-20 w-full text-left"
        onClick={() => {
          setOpen(!open)
        }}>
        {selectedRegion == null ? 'Filter by Region' : selectedRegion}
      </button>
      <div
        className="material-icons absolute right-4 top-1/2 -translate-y-1/2 select-none text-dark_gray"
        onClick={() => {
          if (selectedRegion != null) {
            setSelectedRegion(undefined)
            setOpen(false)
          }
        }}>
        {selectedRegion == null ? 'keyboard_arrow_down' : 'close'}
      </div>
      <div
        className={
          (open ? '' : 'hidden ') +
          'absolute top-full w-full border-very_light_gray shadow-lg rounded-md bg-white transition-all px-8 py-4 mt-1 z-20'
        }>
        {Object.entries(Regions).map(([regionKey, regionName]) => (
          <div
            onClick={() => {
              setSelectedRegion(regionName)
              setOpen(false)
            }}
            className="py-2">
            {regionName}
          </div>
        ))}
      </div>
    </div>
  )
}
