import { getCurrentKey,rotateKey } from "./apiClient";
export const FetchTopSerials = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': getCurrentKey()
        }
      };
      try{
        
        const response =  await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&selectFields=&notNullFields=top250&sortField=top250&sortType=1&lists=series-top250', options)
        if(response.status === 403){
                  rotateKey();
                  return FetchTopSerials()
                }
        if(!response.ok) {
            throw new Error('Запрос не сработал!')
        }
        
        return await response.json()
    }
      catch(err){
        console.error('Ошибка запроса!', err)
        throw err
      }
}
