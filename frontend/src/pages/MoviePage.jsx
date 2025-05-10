import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { FetchFilmId } from '../api/FetchFilmId'
import MovieHero from '../components/MovieHero/MovieHero'
// import { Link } from "react-router-dom"

import 'swiper/css'
import 'swiper/css/bundle'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MovieInfo from '../components/MovieInfo/MovieInfo'
import MovieActor from '../components/MovieActor/MovieActor'
import MovieSimular from '../components/MovieSimular/MovieSimular'
import Preloader from '../components/ui/Preloader/Preloader'

export default function MoviePage() {
  const params = useParams()
  const id = parseInt(params.id)
  console.log(id)
  const { data: filmsdata, isLoading: filmLoading } = useQuery(['filmdata', id], () => FetchFilmId(id))
  console.log(filmsdata)
  return (
    <>
      <Header />

      <main className='film'>
        <Preloader loading={filmLoading} />
        {!filmLoading && (
          <>
            <MovieHero filmsdata={filmsdata} />
            <MovieInfo filmsdata={filmsdata} />
            <MovieActor filmsdata={filmsdata} />
            <MovieSimular data={filmsdata} />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
