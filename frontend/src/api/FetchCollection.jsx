import { getCurrentKey, rotateKey } from "./apiClient";
export const FetchCollection =  async(list) => {
    console.log('Коллекция есть')
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': getCurrentKey()
        }
      };
      try{
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/list/${list}`, options)
        if(response.status === 403){
            rotateKey();
             return FetchCollection(list)
        }
        if (!response.ok) {
            throw new Error('Запрос не сработал!');
          }
        console.log(response)
        return await response.json()
      }
      catch(err){
        console.log(err)
        throw new Error
      }
}