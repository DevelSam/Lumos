
import styles from './MovieActor.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import "swiper/css";
import "swiper/css/bundle";
import { ImageComponent } from '../ImageComponent/ImageComponent';
export default function MovieActor({ filmsdata}){

    const ArrActor = filmsdata.persons.slice(0, 20)
    return( <section className={styles.actor}>
        <div className={`container ${styles['container-actor']}`}>
        <h2 className={styles.title}>Режиссёры и актёры</h2>
            <Swiper
            className='Actor-Slider'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={6}
            speed={800}
            >
            
            {ArrActor.map(data => (
                <SwiperSlide  key={data.id}>
                <Link className={styles.link} to={`/actor/${data.id}`}> 
                <div className={styles.content}>
                    <div className={`${styles.block} ${styles.image}`}>
                    <ImageComponent  className={styles.image} src={data.photo} alt=""/>
                    </div>
                    <p className={styles.role}>{data.profession}</p>
                    <p className={styles.name}>{data.name ? data.name:'err'}</p>
                </div>
                </Link>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>)
    
}

MovieActor.propTypes = {
    filmsdata: PropTypes.object
}