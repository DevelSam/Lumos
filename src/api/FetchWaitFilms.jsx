import { getCurrentKey, rotateKey } from "./apiClient";
export const FetchWaitFilms = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': getCurrentKey()
        }
      };
      try{
       
        const response =  await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=&sortField=votes.await&sortType=-1&lists=planned-to-watch-films&notNullFields=poster.url', options)
        if(response.status === 403){
          rotateKey();
          return FetchWaitFilms()
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
