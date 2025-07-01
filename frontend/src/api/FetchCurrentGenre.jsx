import { options } from './apiClient'
export const FetchCurrentGenre = async (genre, type, page) => {
  try {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&notNullFields=poster.url&notNullFields=${type == 'tv-series' ? `seriesLength` : `movieLength`}&isSeries=${type == 'tv-series' ? `true` : `false`}&limit=30&rating.kp=6-10&page=${page}${genre ? `&genres.name=${genre}` : ``}`,
      options,
    )
    if (!response.ok) {
      throw new Error()
    }
    return await response.json()
  } catch (error) {
    throw (error, console.log(error))
  }
}
