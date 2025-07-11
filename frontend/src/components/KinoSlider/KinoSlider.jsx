import { Swiper, SwiperSlide } from 'swiper/react'
import { memo } from 'react'
import styles from './KinoSlider.module.css'
import { Link } from 'react-router-dom'
import { ImageComponent } from '../ui/ImageComponent/ImageComponent'
import 'swiper/css'
import 'swiper/css/bundle'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Button from '../ui/Button/Button'
import FormatRating from '../../utils/FormatRating'
const KinoSlider = memo(function kino({ data, title, collection }) {
  return (
    <section className={styles.kino}>
      <div className={`container ${styles.container}`}>
        <div className={styles[`title-container`]}>
          <h2 className={styles.title}>{title}</h2>
          <Link to={`/collections/${collection}`}>
            <Button className={styles.button}>Смотреть все</Button>
          </Link>
        </div>
        <Swiper
          className='kino-Slider'
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          speed={800}
          slidesPerView={4}
          style={{
            height: 'auto',
          }}
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
          {data.docs.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/film/${movie.id}`}>
                <div className={styles.content}>
                  <div className={styles[`image-block`]}>
                    <ImageComponent src={movie.poster.url} className={styles.image} height={'100%'} alt='' />
                  </div>
                  {movie.rating.imdb || movie.rating.kp ? (
                    <div className={styles.score}>
                      <div className={styles[`score-container`]}>
                        <span className={styles.number}> {FormatRating(movie.rating.imdb || movie.rating.kp)}</span>
                      </div>
                    </div>
                  ) : null}
                  <p className={styles.name}>{movie.name}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
})

export default KinoSlider
