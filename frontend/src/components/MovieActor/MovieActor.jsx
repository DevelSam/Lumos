import styles from './MovieActor.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/bundle'
import { ImageComponent } from '../ui/ImageComponent/ImageComponent'
export default function MovieActor({ filmsdata }) {
  const ArrActor = filmsdata.persons.slice(0, 20)
  return (
    <section className={styles.actor}>
      <div className={`container ${styles['container-actor']}`}>
        <h2 className={styles.title}>Режиссёры и актёры</h2>
        <Swiper
          className='Actor-Slider'
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            380: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            960: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1440: {
              slidesPerView: 6,
            },
          }}
        >
          {ArrActor.map((data) => (
            <SwiperSlide key={data.id}>
              <Link className={styles.link} to={`/actor/${data.id}`}>
                <div className={styles.content}>
                  <div className={`${styles.block} ${styles.image}`}>
                    <ImageComponent className={styles.image} src={data.photo} alt='' />
                  </div>
                  <p className={styles.role}>{data.profession}</p>
                  <p className={styles.name}>{data.name ? data.name : 'err'}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
