import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { CountryList } from './pages/CountryList/CountryList'
import { CountryDetail } from './pages/CountryDetail/CountryDetail'
import { PageHeader } from './shared/components/PageHeader/PageHeader'
import { AppContext, AppContextProvider } from './shared/context/AppContext'

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
