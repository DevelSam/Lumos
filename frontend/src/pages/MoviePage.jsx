import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { FetchFilmId } from '../api/FetchFilmId'
import MovieHero from '../components/MovieHero/MovieHero'

import 'swiper/css'
import 'swiper/css/bundle'

import MovieInfo from '../components/MovieInfo/MovieInfo'
import MovieActor from '../components/MovieActor/MovieActor'
import MovieSimular from '../components/MovieSimular/MovieSimular'
import Preloader from '../components/ui/Preloader/Preloader'
import Layout from '../components/ui/Layout/Layout'

export default function MoviePage() {
  const params = useParams()
  const id = parseInt(params.id)

  const { data: filmsdata, isLoading: filmLoading } = useQuery(['filmdata', id], () => FetchFilmId(id))

  return (
    <Layout>
      <Preloader loading={filmLoading} />
      {!filmLoading && (
        <>
          <MovieHero filmsdata={filmsdata} />
          <MovieInfo filmsdata={filmsdata} />
          <MovieActor filmsdata={filmsdata} />
          <MovieSimular data={filmsdata} />
        </>
      )}
    </Layout>
  )
}
