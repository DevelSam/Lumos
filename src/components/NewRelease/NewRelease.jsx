import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/bundle'
import './NewRelease.css'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
function NewRelease({ data, title }) {
    const [isLastSlide, setIsLastSlide] = useState(false)
    const [isStartSlide, setIsStartSlide] = useState(true)

    function handleSlideChange(swiper) {
        setIsLastSlide(swiper.isEnd)
        setIsStartSlide(swiper.isBeginning)
    }
    return (
        <section className='release'>
            <div className='container realese-container'>
                <h2 className='release-title'>{title}</h2>
                <Swiper
                    className='ReleaseSlider'
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    speed={800}
                    navigation={{
                        nextEl: '.release-button-next',
                        prevEl: '.release-button-prev',
                    }}
                    onSlideChange={handleSlideChange}
                    // autoplay={{ delay: 3000 }}
                >
                    {' '}
                    {console.log({ data })}
                    {data.movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className='release-content'>
                                <img src={movie.poster} className='release-image' alt='' />
                                <div className='release-score'>
                                    <div className='release-score__container slider-score'>
                                        <span className='release-score__container  slider-score__numbers'>
                                            {movie.rating}
                                        </span>
                                    </div>
                                </div>
                                <p className='release-name'>{movie.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={`${isLastSlide ? 'hidden' : ''} release-button-next `}>&#8250;</div>
                <div className={`${isStartSlide ? 'hidden' : ''} release-button-prev `}>&#8249;</div>
            </div>
        </section>
    )
}
NewRelease.propTypes = {
    data: PropTypes.any,
    title: PropTypes.string,
}
export default NewRelease
