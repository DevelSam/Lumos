import HeroSection from '../components/HeroSection/HeroSection'
import Header from '../components/Header/Header'
import KinoSlider from '../components/KinoSlider/KinoSlider'
import RandomFilm from '../components/RandomFilm/RandomFilm'

import { FetchTopFilms } from '../api/FetchTopFilms'
import { FetchRandomFilm } from '../api/FetchRandomFilm'
import { FetchTopSerials } from '../api/FetchTopSerials'
import { FetchWaitFilms } from '../api/FetchWaitFilms'
import { FetchPopular } from '../api/FetchPopular'
import { FetchRandomSerials } from '../api/FetchRandomSerials'
import { FetchTopNow } from '../api/FetchTopNow'
import Footer from '../components/Footer/Footer'
import {useQuery} from 'react-query'
import Preloader from '../components/Preloader/Preloader'
export default function MainPage(){
  
    const {data:topFilmsData, isLoading:topFilmsLoading} = useQuery('topFilms', FetchTopFilms)
    const {data:randomFilmsData, isLoading:randomFilmsLoading} = useQuery('randomFilms', FetchRandomFilm)
    const {data:topSerialsData, isLoading:topSerialsLoading} = useQuery('topSerials', FetchTopSerials)
    const {data:waitFilmsData, isLoading:waitFilmsLoading} = useQuery('waitFilms', FetchWaitFilms)
    const {data:popularData, isLoading:popularLoading} = useQuery('anime', FetchPopular)
    const {data:randomSerialsData, isLoading:randomSerialsLoading} = useQuery('randomSerials', FetchRandomSerials)
    const {data:TopNowData, isLoading:TopNowLoading} = useQuery('TopNow', FetchTopNow)
    let loading =  topFilmsLoading || randomFilmsLoading || topSerialsLoading || waitFilmsLoading || popularLoading || randomSerialsLoading || TopNowLoading;
    
     return (
        <>
        <Header/>
          <main>
            
            
            { loading ? (
              <Preloader/>
            ) : (
              <>
                {/* {console.log(randomData)} */}
                <HeroSection data={TopNowData} />
                <KinoSlider data={topFilmsData} title={'Лучшие фильмы'} collection={'top250'} />
                <KinoSlider data={topSerialsData} title={'Лучшие Сериалы'}    collection={'series-top250'}/>
                <RandomFilm data={randomFilmsData} title={'Рандомный фильмов с оценкой 8+'} />
                
                <KinoSlider data={popularData} title={'Популярные фильмы' }  collection={'popular-films'} />
                <KinoSlider data={waitFilmsData} title={'Ожидаемые больше всех'} collection={'planned-to-watch-films'} />
                <RandomFilm data={randomSerialsData} title={'Рандомный сериал с оценкой 8+'} />
              </>
            )}
          </main>
          <Footer/>
        </>
      )
}