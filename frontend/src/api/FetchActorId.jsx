import { getCurrentKey, rotateKey } from './apiClient'
export const FetchActorId = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getCurrentKey(),
    },
  }

  try {
    console.log(id)
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/person/${id}`, options)
    if (response.status === 403) {
      rotateKey()
      return FetchActorId(id)
    }
    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}
