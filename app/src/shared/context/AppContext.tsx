import React, { createContext, PropsWithChildren, useMemo, useState } from 'react'

interface IAppContext {
  search?: string | undefined
  setSearch: React.Dispatch<string | undefined>
  selectedRegion?: string | undefined
  setSelectedRegion: React.Dispatch<string | undefined>
}

export const AppContext = createContext<IAppContext>({
  setSearch: () => {},
  setSelectedRegion: () => {}
})

export const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [search, setSearch] = useState<string | undefined>(undefined)
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined)
  const value = useMemo(() => {
    return {
      search: search,
      setSearch: setSearch,
      selectedRegion: selectedRegion,
      setSelectedRegion: setSelectedRegion
    }
  }, [search, selectedRegion])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
