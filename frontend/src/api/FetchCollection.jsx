import { options } from './apiClient'
export const FetchCollection = async (list) => {
  try {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/list/${list}`, options)

    if (!response.ok) {
      throw new Error('Запрос не сработал!')
    }

    return await response.json()
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}
