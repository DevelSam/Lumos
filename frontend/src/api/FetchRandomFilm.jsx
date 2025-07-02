import { options } from './apiClient'
export const FetchRandomFilm = async () => {
  try {
    //https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=id&notNullFields=name&notNullFields=shortDescription&notNullFields=poster.url&type=movie&rating.imdb=8-10
    // https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=rating&selectFields=poster&selectFields=backdrop&type=movie&rating.imdb=8-10
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie/random?rating.imdb=8-10&lists=top500', options)
    // const response =  await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=1&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=rating&selectFields=poster&selectFields=backdrop&type=movie&rating.imdb=8-10', options)

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}
