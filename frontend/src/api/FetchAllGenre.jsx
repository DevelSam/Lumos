import { getCurrentKey } from "./apiClient";

export const FetchAllGenre = async () => {
    const options = {
        method: 'GET',
              headers: {
                accept: 'application/json',
                'X-API-KEY': getCurrentKey()
              }
    }
    try{
        const response = await fetch('https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name', options)
        if(!response.ok){
            throw new Error()
        }
        return response.json()
    }
    catch(err){
        throw err,
        console.error(`Ошибка ` + err)
    }
}