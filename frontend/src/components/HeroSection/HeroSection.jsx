import styles from './HeroSection.module.css'
import 'swiper/css'
import 'swiper/css/bundle'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
export default function HeroSection({ data }) {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        //   navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data.docs.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className={styles.bg}>
              <img src={movie.backdrop?.url} alt='' />
            </div>
            <div className={`container ${styles.container}`}>
              <div className={styles.content}>
                <div>
                  <h1 className={styles.title}>{movie.name}</h1>
                  <p className={styles.description}>{movie.shortDescription}</p>
                </div>
                <div className={styles.controls}>
                  <Link to={`/film/${movie.id}`}>
                    <button className={`${styles[`watch-button`]} button`}>
                      <svg className={styles.play} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                        <path d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z' />
                      </svg>
                      Смотреть фильм
                    </button>
                  </Link>
                  <button className={`${styles[`description-button`]} button`}>О фильме</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
HeroSection.propTypes = {
  data: PropTypes.object,
}
