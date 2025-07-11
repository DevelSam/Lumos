import useLikeFilm from '../../hooks/useLikeFilm'
import styles from './MovieInfo.module.css'

import { useEffect, useState, memo, useCallback } from 'react'
export default memo(function MovieInfo({ filmsdata }) {
  const { films, deleteLikeFilms, getLikeFilms, addLikeFilms } = useLikeFilm()
  const [likes, setLikes] = useState(false)
  const [dislikes, setDislikes] = useState(false)
  useEffect(() => {
    getLikeFilms()
  }, [likes, dislikes])
  useEffect(() => {
    if (films.length > 0) {
      films.forEach((element) => {
        if (element.filmId == filmsdata.id) {
          if (element.filmLike) {
            setLikes(true)
            setDislikes(false)
          } else {
            setDislikes(true)
            setLikes(false)
          }
        }
      })
    }
  }, [films])
  const handleLikes = useCallback(() => {
    if (likes && !dislikes) {
      deleteLikeFilms(filmsdata.id)
      setLikes(false)
    } else {
      setLikes(true)
      addLikeFilms(filmsdata.id, true)
    }
  }, [likes])
  const handleDislike = useCallback(() => {
    if (!likes && dislikes) {
      deleteLikeFilms(filmsdata.id)
      setDislikes(false)
    } else {
      setDislikes(true)
      addLikeFilms(filmsdata.id, false)
    }
  }, [dislikes])

  return (
    <section className={styles.info}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Описание</h2>
        <div className={styles.block}>
          <p className={styles.text}>{filmsdata.description}</p>
          <div className={styles[['reviews-block']]}>
            <div className={styles['reviews-choice']}>
              <p className={styles['choice-title']}>Поставьте оценку</p>
              <p className={styles['choice-text']}>Оценки улучшают ваши рекомендации</p>
              <div className={styles['choice-content']}>
                <div className={styles.positive} onClick={() => handleLikes()}>
                  <svg
                    width={'34px'}
                    height={'30px'}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      opacity={likes ? 1 : 0}
                      d='M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z'
                    ></path>
                    <path
                      opacity={likes ? 0 : 1}
                      d='M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z'
                    ></path>
                  </svg>
                  <p className={styles['positive-text']}>Мне понравилось</p>
                </div>
                <div className={styles.negative} onClick={() => handleDislike()}>
                  <svg
                    width={'34px'}
                    height={'30px'}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      opacity={dislikes ? 0 : 1}
                      d='M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z'
                    ></path>
                    <path
                      opacity={dislikes ? 1 : 0}
                      d='M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z'
                    ></path>
                  </svg>

                  <p className={styles['negative-text']}>Мне не понравилось</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
