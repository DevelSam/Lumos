import { getCurrentKey } from './apiClient'
export const FetchCurrentGenre = async (genre, type, page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getCurrentKey(),
    },
  }

  try {
    console.log(page)
    //https://api.kinopoisk.dev/v1.4/movie?notNullFields=name&notNullFields=poster.url&notNullFields=movieLength&isSeries=false&limit=25&rating.kp=6-10&genres.name=%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5&page=1
    // const test = await fetch('https://api.kinopoisk.dev/v1.4/image?page=1&limit=10&selectFields=&notNullFields=movieId&movieId=5214',options)
    //     console.log(test.json())
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
