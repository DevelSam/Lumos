
import { getCurrentKey, rotateKey} from "./apiClient";
export const FetchTopFilms = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': getCurrentKey()
      }
    };

    try {
      const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=top250&notNullFields=top250&sortField=top250&sortType=1&type=movie', options);
      if(response.status === 403){
        rotateKey();
        return FetchTopFilms()
      }
      if (!response.ok) {
        throw new Error('Запрос не сработал!');
      }
      console.log(response)
      return await response.json();
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };