
import styles from './MovieHero.module.css'
import PlayerModal from '../PlayerModal/PlayerModal';
import { useState } from 'react';
import PropTypes from 'prop-types'
export default function MovieHero({ filmsdata }) {
    const [isWatchModalOpen, setIsWatchModalOpen] = useState(false);
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
    const hasTrailer = filmsdata.videos && filmsdata.videos.trailers && filmsdata.videos.trailers.length > 0;

    const openWatchModal = () => {
        setIsWatchModalOpen(true);
        document.body.classList.add('unscroll');
    };

    const closeWatchModal = () => {
        setIsWatchModalOpen(false);
        document.body.classList.remove('unscroll');
    };

    const openTrailerModal = () => {
        setIsTrailerModalOpen(true);
        document.body.classList.add('unscroll');
    };

    const closeTrailerModal = () => {
        setIsTrailerModalOpen(false);
        document.body.classList.remove('unscroll');
    };
  return (
    <section className={styles.section}>
    {console.log(filmsdata)}
      <div className={`container`}>
        <div
          key={filmsdata.id}
          style={{ backgroundImage: `url(${filmsdata.backdrop?.url})` }}
          className={styles.content}
        >
          <div className={styles['text-block']}>
            <div className={styles['info-block']}>
              <p className={styles.rating}>{filmsdata.rating.imdb}</p>
              <p className={styles.genres}>
                {filmsdata.genres ? filmsdata.genres[0].name : null}
              </p>
              <p className={styles.year}>{filmsdata.year}</p>
              <p className={styles.country}>
                {filmsdata.countries[0].name
                  ? filmsdata.countries[0].name
                  : null}
              </p>
            </div>
            <p className={styles.title}>{filmsdata.name}</p>
            <p className={styles.description}>{filmsdata.shortDescription}</p>
            <div className={styles['button-block']}>
              <button
                className={`${styles['button-watch']} button-watch button`}
                onClick={openWatchModal}
              >
                {filmsdata.type === 'movie' ? 'Смотреть фильм':'Смотреть сериал'}
              </button>
              <PlayerModal
                id={filmsdata.id}
                isOpen={isWatchModalOpen}
                onClose={closeWatchModal}
              ></PlayerModal>
              {hasTrailer ? 
                (<>
                <button onClick={openTrailerModal} className={`${styles['button-trailer']} button-trailer button`}>
                Трейлер
                </button>
                
                <PlayerModal
                isOpen={isTrailerModalOpen} onClose={closeTrailerModal} youtube={filmsdata.videos.trailers[0].url}
                ></PlayerModal>
                </>)
                :
                (null)
                }
                
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
MovieHero.propTypes = {
    filmsdata: PropTypes.object
}