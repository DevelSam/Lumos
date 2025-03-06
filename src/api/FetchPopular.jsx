import { getCurrentKey, rotateKey} from "./apiClient";

export const FetchPopular= async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': getCurrentKey()
      }
    };

    try {
      const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=12&sortField=votes.kp&sortType=-1&votes.kp=1000-6666666&lists=popular-films', options);
      if(response.status === 403){
        rotateKey();
        return FetchPopular()
      }
      if (!response.ok) {
        throw new Error('Запрос не сработал!');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };