import { options } from './apiClient'
export const FetchSearch = async (query) => {
  try {
    const res = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=5&query=${query}`, options)
    if (!res.ok) {
      throw new Error('Ошибка сетевого запроса')
    }

    return await res.json()
  } catch (err) {
    console.error(err)
    throw err
  }
}
