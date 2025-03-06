import { useEffect, useState } from "react";


export default function useFetch(func){
    const [moviesData, setMoviesData] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    
      useEffect(() => {
        const loadMovies = async () => {
          try {
            const data = await func();
            setMoviesData(data);
          } catch (error) {
            console.error('Error loading movies:', error);
            setLoadingData(false)
          }
          finally{
            setLoadingData(false)
          }
        };
    
        loadMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return [moviesData, loadingData]
}