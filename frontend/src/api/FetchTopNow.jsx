import { options } from './apiClient'
export const FetchTopNow = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=5&notNullFields=votes.kp&notNullFields=votes.kp&sortField=votes.kp&sortType=-1&year=2020-2025&lists=popular-films',
      options,
    )

    if (!response.ok) {
      console.log('Запрос не срабртал')
    }
    return await response.json()
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}
