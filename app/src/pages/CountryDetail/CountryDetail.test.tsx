import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { CountryDetail } from './CountryDetail'

const renderWithQuery = (ui: ReactElement) => {
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  )
}

describe('CountryDetail', () => {
  it('should-render-an-empty-state', async () => {
    jest.mock('../../shared/hooks/countries', () => ({
      useCountryAlpha3: () => []
    }))

    jest.mock('react-router', () => ({
      useParams: jest.fn().mockReturnValue({ country: '' })
    }))

    renderWithQuery(<CountryDetail />)

    await expect(screen.getByText('Could not find country :(')).toBeInTheDocument()
  })
})
