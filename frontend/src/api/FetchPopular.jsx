import { options } from './apiClient'

export const FetchPopular = async () => {
  try {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&sortField=votes.kp&sortType=-1&votes.kp=1000-6666666&lists=popular-films&year=2022-2024`,
      options,
    )

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}
