import { getCurrentKey } from './apiClient'
export const FetchSearch = async (query) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getCurrentKey(),
    },
  }

  try {
    const res = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=5&query=${query}`, options)
    if (!res.ok) {
      throw new Error('Ошибка сетевого запроса')
    }
    console.log('вызов')
    return await res.json()
  } catch (err) {
    console.error(err)
    throw err
  }
}
