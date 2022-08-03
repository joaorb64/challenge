import React, { createContext, PropsWithChildren, useState } from 'react'

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

  return (
    // this is the provider providing state
    <AppContext.Provider
      value={{
        search: search,
        setSearch: setSearch,
        selectedRegion: selectedRegion,
        setSelectedRegion: setSelectedRegion
      }}>
      {children}
    </AppContext.Provider>
  )
}
