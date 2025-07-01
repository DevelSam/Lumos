import { Swiper, SwiperSlide } from 'swiper/react'
import { memo } from 'react'
import styles from './CategorySliderButtons.module.css'
import 'swiper/css'
import 'swiper/css/bundle'
const CategorySliderButtons = memo(function categorySliderButtons({ data, setState }) {
  return (
    <Swiper
      className={styles[`Movie-slider`]}
      slidesPerView={7.5}
      spaceBetween='30px'
      speed={500}
      breakpoints={{
        1600: {
          slidesPerView: 5.5,
        },
        1280: {
          slidesPerView: 5.5,
        },
        960: {
          slidesPerView: 4.5,
        },
        768: {
          slidesPerView: 3.5,
        },
        568: {
          slidesPerView: 3.5,
          spaceBetween: '15px',
        },
        320: {
          slidesPerView: 2,
          spaceBetween: '15px',
        },
      }}
    >
      <SwiperSlide>
        <div
          onClick={(e) => {
            e.preventDefault()
            setState('')
          }}
          className={`${styles.button} button`}
        >
          Все категории
        </div>
      </SwiperSlide>
      {data.map((value, index) => (
        <SwiperSlide key={index}>
          {/* <Link to={`/type/${value.name}` } className={styles.link}  onClick={handleButtonClick}> */}
          <div
            onClick={(e) => {
              e.preventDefault()
              setState(encodeURI(value.name))
            }}
            className={`${styles.button} button`}
          >
            {value.name}
          </div>
          {/* </Link> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
})
export default CategorySliderButtons
