import { options } from './apiClient'
export const FetchTopSerials = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&selectFields=&notNullFields=top250&sortField=top250&sortType=1&lists=series-top250',
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
