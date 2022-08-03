import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { useCountries, useCountryAlpha3 } from './countries'

const createWrapper = () => {
  const queryClient = new QueryClient()
  return ({ children }: { children: JSX.Element }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useCountryAlpha3', () => {
  it('should return a country', async () => {
    const { result } = renderHook(() => useCountryAlpha3('BRA'), { wrapper: createWrapper() })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    await expect(result.current.data?.name).toBe('Brazil')
  })
})

describe('useCountries', () => {
  it('should return more than zero countries', async () => {
    const { result } = renderHook(() => useCountries(), { wrapper: createWrapper() })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    await expect(result.current.data?.length).toBeGreaterThan(0)
  })
})
