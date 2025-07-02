import { options } from './apiClient'
export const FetchWaitFilms = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=&sortField=votes.await&sortType=-1&lists=planned-to-watch-films&notNullFields=poster.url',
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
