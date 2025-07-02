import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FetchCurrentGenre } from '../../api/FetchCurrentGenre'
import styles from './FilmsGenre.module.css'
import { ImageComponent } from '../ImageComponent/ImageComponent'

export default function FilmsGenre() {
  const params = useParams()
  const genre = params.genre
  const { data: currentGenreData, isLoading: currentGenreLoading } = useQuery(['currentGenreData', genre], () =>
    FetchCurrentGenre(genre),
  )

  return (
    <div className={`${styles.container}`}>
      {currentGenreLoading ? null : (
        <>
          {currentGenreData.docs.map((movie) => (
            <div key={movie.id} className={styles.content}>
              <Link to={`/film/${movie.id}`}>
                <div className={styles.block}>
                  <ImageComponent height='450px' src={movie.poster?.url} className={styles.image} alt='' />
                </div>
                {movie.rating.imdb || movie.rating.kp ? (
                  <div className={styles.score}>
                    <div className={styles.scoreContainer}>
                      {/* <span className={styles.number}> { formatRationg(movie.rating.imdb || movie.rating.kp)}</span> */}
                    </div>
                  </div>
                ) : null}
              </Link>
              <p className={styles.name}>{movie.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
