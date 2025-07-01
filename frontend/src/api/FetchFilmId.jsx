import { options } from './apiClient'
export const FetchFilmId = async (id) => {
  try {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}
