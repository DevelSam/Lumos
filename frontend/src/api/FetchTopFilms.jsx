import { options } from './apiClient'
export const FetchTopFilms = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=top250&notNullFields=top250&sortField=top250&sortType=1&type=movie',
      options,
    )

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}
