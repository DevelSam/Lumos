import { Swiper, SwiperSlide } from 'swiper/react'
import { memo } from 'react'
import styles from './CategorySliderButtons.module.css'
import 'swiper/css'
import 'swiper/css/bundle'
const CategorySliderButtons = memo(function categorySliderButtons({ data, setState }) {
  return (
    <Swiper className={styles[`Movie-slider`]} slidesPerView={7.5} spaceBetween='10px' speed={500}>
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
