
import styles from './MovieInfo.module.css'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import PropTypes from 'prop-types'
export default function MovieInfo({filmsdata}){
    return(
     <section className={styles.info}>
                    <div className={`container ${styles.container   }`}>
                        <h2 className={styles.title}>Описание</h2>
                        <div className={styles.block}>
                        <p className={styles.text}>{filmsdata.description}</p>
                        <div className={styles[['reviews-block']]}>
                            <div className={styles['reviews-choice']}>
                                <p className={styles['choice-title']}>Поставьте оценку
                                </p>
                                <p className={styles['choice-text']}>Оценки улучшают ваши рекомендации</p>
                                <div className={styles['choice-content']}>
                                <div className={styles.positive}>
                                    <img src={like} alt="" className={styles['image-positive']} />
                                    <p className={styles['positive-text']}>Мне понравилось</p>
                                </div>
                                <div className={styles.negative}>
                                    <img src={dislike} alt="" className={styles['image-negative']} />
                                    <p className={styles['negative-text']}>Мне не понравилось</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
            )
}
MovieInfo.propTypes = {
    filmsdata: PropTypes.object
}