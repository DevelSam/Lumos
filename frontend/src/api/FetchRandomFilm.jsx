import { options } from './apiClient'
export const FetchRandomFilm = async () => {
  try {
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie/random?rating.imdb=8-10&lists=top500', options)

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}
