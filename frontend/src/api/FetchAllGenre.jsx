import { options } from './apiClient'
export const FetchAllGenre = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
      options,
    )
    if (!response.ok) {
      throw new Error()
    }
    return response.json()
  } catch (err) {
    throw (err, console.error(`Ошибка ` + err))
  }
}
