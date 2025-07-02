import PropTypes from 'prop-types'
import styles from './MovieSimular.module.css'
import 'swiper/css'
import 'swiper/css/bundle'
import FormatRating from '../../utils/FormatRating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
export default function MovieSimular({ data }) {
  const hasSimilarMovies = data?.similarMovies?.length > 0
  if (!hasSimilarMovies) {
    return null
  }
  return (
    <section className={styles.section}>
      <div className='container'>
        <h4 className={styles.title}>Похожие фильмы</h4>
        <Swiper
          className='Simular-Slider'
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          speed={800}
          autoplay
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            380: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            960: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {data.similarMovies
            ? data.similarMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <Link to={`/film/${movie.id}`}>
                    <div className={styles.content}>
                      <div className={styles.block}>
                        <img src={movie.poster.url} className={styles.image} alt='' />
                      </div>
                      {movie.rating?.imdb || movie.rating?.kp ? (
                        <div className={styles.score}>
                          <div className={styles['score-container']}>
                            <span className={styles.numbers}>{FormatRating(movie.rating.imdb || movie.rating.kp)}</span>
                          </div>
                        </div>
                      ) : null}
                      <p className={styles.name}>{movie.name}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </section>
  )
}
MovieSimular.propTypes = {
  data: PropTypes.object,
}
