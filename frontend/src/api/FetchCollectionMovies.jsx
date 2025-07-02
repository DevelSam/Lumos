import { options } from './apiClient'

export const FetchCollectionMovies = async (list) => {
  try {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=30&lists=${list}&sortField=rating.kp&sortType=-1&selectFields=id&selectFields=name&selectFields=poster&selectFields=year&selectFields=rating`,
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
