
import { Swiper, SwiperSlide } from "swiper/react"
import styles from './KinoSlider.module.css'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/bundle";
 
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
function KinoSlider({data, title, collection }) {
    function formatRationg(rating){
        return Number.isInteger(rating) ? rating.toFixed(1): rating.toFixed(1);
    }
    return(
        <section className={styles.kino}>
        <div className={`container ${styles.container}`}>
            <div className={styles[`title-container`]}>
            <h2 className={styles.title}>{title}</h2>
            <Link to={`/movies/${collection}`}>
            <button className={styles.button}>Смотреть все</button>
            </Link>
            </div>
            <Swiper
                className='kino-Slider'
                 modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                speed={800}
                // breakpoints={}
                slidesPerView = {5}
                style={{
                    height: 'auto', // Резиновая высота контейнера
                }}
            >   
                {data.docs.map((movie) => (
                    <SwiperSlide key={movie.id} >
                        <Link to ={`/film/${movie.id}`}>
                        <div className={styles.content}>
                            <div className={styles[`image-block`]}>
                            <img src={movie.poster.url} className={styles.image} alt="" />  
                            </div>
                            {movie.rating.imdb || movie.rating.kp ? (
                            <div className={styles.score}>
                               
                                <div className={styles[`score-container`]}>
                                    <span className={styles.number}> { formatRationg(movie.rating.imdb || movie.rating.kp)}</span>
                                </div>
                                
                            </div>
                            ):null}    
                            <p className={styles.name}>{movie.name}</p>
                        </div>
                        </Link>

                    </SwiperSlide>
                ))}
                
            </Swiper>
            
       
            
        </div>
    </section>
    )
}
KinoSlider.propTypes = {
    data: PropTypes.any,
    title : PropTypes.string,
    collection: PropTypes.string
}
export default  KinoSlider