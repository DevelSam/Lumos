import styles from './MovieHero.module.css'
import Modal from '../ui/Modal/Modal'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { BackdropImage } from '../ui/BacdropImage/BackdropImage'
export default function MovieHero({ filmsdata }) {
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false)
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false)
  const hasTrailer = filmsdata.videos && filmsdata.videos.trailers && filmsdata.videos.trailers.length > 0

  const openWatchModal = () => {
    setIsWatchModalOpen(true)
    document.body.classList.add('unscroll')
  }

  const closeWatchModal = () => {
    setIsWatchModalOpen(false)
    document.body.classList.remove('unscroll')
  }

  const openTrailerModal = () => {
    setIsTrailerModalOpen(true)
    document.body.classList.add('unscroll')
  }

  const closeTrailerModal = () => {
    setIsTrailerModalOpen(false)
    document.body.classList.remove('unscroll')
  }
  return (
    <section className={styles.section}>
      {console.log(filmsdata)}
      <div className={`container`}>
        <BackdropImage key={filmsdata.id} src={filmsdata.backdrop?.url} className={styles.content}>
          <div className={styles['text-block']}>
            <div className={styles['info-block']}>
              <p className={styles.rating}>{filmsdata.rating.imdb}</p>
              <p className={styles.genres}>{filmsdata.genres ? filmsdata.genres[0].name : null}</p>
              <p className={styles.year}>{filmsdata.year}</p>
              <p className={styles.country}>{filmsdata.countries[0].name ? filmsdata.countries[0].name : null}</p>
            </div>
            <p className={styles.title}>{filmsdata.name}</p>
            <p className={styles.description}>{filmsdata.shortDescription}</p>
            <div className={styles['button-block']}>
              <button className={`${styles['button-watch']} button-watch button`} onClick={openWatchModal}>
                {filmsdata.type === 'movie' ? 'Смотреть фильм' : 'Смотреть сериал'}
              </button>
              <Modal isOpen={isWatchModalOpen} onClose={closeWatchModal}>
                <iframe
                  className={styles.iframe}
                  width='1060'
                  height='615'
                  allowFullScreen
                  src={`https://ddbb.lol/?id=${filmsdata.id}&n=0`}
                ></iframe>
              </Modal>
              {hasTrailer ? (
                <>
                  <button onClick={openTrailerModal} className={`${styles['button-trailer']} button-trailer button`}>
                    Трейлер
                  </button>

                  <Modal isOpen={isTrailerModalOpen} onClose={closeTrailerModal}>
                    <iframe
                      className={styles.iframe}
                      width='1060'
                      height='615'
                      allowFullScreen
                      src={filmsdata.videos.trailers[0].url}
                    ></iframe>
                  </Modal>
                </>
              ) : null}
            </div>
          </div>
        </BackdropImage>
      </div>
    </section>
  )
}
MovieHero.propTypes = {
  filmsdata: PropTypes.object,
}
