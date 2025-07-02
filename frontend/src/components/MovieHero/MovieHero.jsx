import styles from './MovieHero.module.css'
import Modal from '../ui/Modal/Modal'
import { useContext, useState } from 'react'

import { BackdropImage } from '../ui/BackdropImage/BackdropImage'
import AuthContext from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import Button from '../ui/Button/Button'
import FormatRating from '../../utils/FormatRating'
export default function MovieHero({ filmsdata }) {
  const { user } = useContext(AuthContext)
  const [isWatchModalOpen, setIsWatchModalOpen] = useState(false)
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false)
  const hasTrailer = filmsdata.videos && filmsdata.videos.trailers && filmsdata.videos.trailers.length > 0

  const openWatchModal = () => {
    if (user.isActive) {
      setIsWatchModalOpen(true)
      document.body.classList.add('unscroll')
    } else {
      notify()
    }
  }
  const notify = () =>
    toast.info('Для просмотра фильма активируйте аккаунт', { position: 'top-center', className: styles.toast })
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
      <div className={`container`}>
        <BackdropImage key={filmsdata.id} src={filmsdata.backdrop?.url} className={styles.content}>
          <div className={styles['text-block']}>
            <div className={styles['info-block']}>
              <p className={styles.rating}>{FormatRating(filmsdata?.rating?.kp)}</p>
              <p className={styles.genres}>{filmsdata.genres ? filmsdata.genres[0].name : null}</p>
              <p className={styles.year}>{filmsdata.year}</p>
              <p className={styles.country}>{filmsdata.countries[0].name ? filmsdata.countries[0].name : null}</p>
            </div>
            <p className={styles.title}>{filmsdata.name}</p>
            <p className={styles.description}>{filmsdata.shortDescription}</p>
            <div className={styles['button-block']}>
              <Button className={styles.buttonWatch} onClick={openWatchModal}>
                {filmsdata.type === 'movie' ? 'Смотреть фильм' : 'Смотреть сериал'}
              </Button>
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
                  <Button type='secondary' onClick={openTrailerModal} className={styles.buttonTrailer}>
                    Трейлер
                  </Button>

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
      <ToastContainer pauseOnHover={false} />
    </section>
  )
}
