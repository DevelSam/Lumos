import { options } from './apiClient'

export const FetchRandomSerials = async () => {
  try {
    const response = await fetch(
      'https://api.kinopoisk.dev/v1.4/movie/random?rating.imdb=8-10&notNullFields=backdrop.url&lists=series-top250',
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

//
