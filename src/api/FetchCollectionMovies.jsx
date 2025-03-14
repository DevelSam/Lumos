import { rotateKey, getCurrentKey } from './apiClient'

export const FetchCollectionMovies = async (list) => {
  console.log(list)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getCurrentKey(),
    },
  }
  try {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&lists=${list}`, options)
    if (response.status === 403) {
      rotateKey()
      return FetchCollectionMovies(list)
    }
    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }
    console.log(response)
    return await response.json()
  } catch (err) {
    console.log(err, 'Ошибка запроса')
  }
}
