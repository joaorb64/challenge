import { Routes, Route } from 'react-router-dom'
import './App.css'
import { CountryList } from './pages/CountryList/CountryList'
import { CountryDetail } from './pages/CountryDetail/CountryDetail'
import { PageHeader } from './shared/components/PageHeader/PageHeader'
import { AppContextProvider } from './shared/context/AppContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  return (
    <AppContextProvider>
      <PageHeader />
      <div className="container mx-auto pt-40 px-8">
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/:country" element={<CountryDetail />} />
        </Routes>
      </div>
    </AppContextProvider>
  )
}

export default App
