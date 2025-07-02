import styles from './RandomFilm.module.css'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { BackdropImage } from '../ui/BackdropImage/BackdropImage'
import Button from '../ui/Button/Button'

const RandomFilm = memo(function randomFilm({ data, title }) {
  return (
    <section className={styles.container}>
      <div className='container'>
        <h3 className={styles.title}>{title}</h3>
        <BackdropImage src={data?.backdrop.url}>
          <div className={styles.textBlock}>
            <div className={styles.nameBlock}>
              <div className={styles.rating}>
                <p className={styles.ratingNumbers}>
                  {Number.isInteger(data?.rating?.imdb) ? data.rating.imdb.toFixed(1) : data.rating.imdb}
                </p>
              </div>
              <p className={styles.name}>{data?.name}</p>
            </div>
            <p className={styles.description}>{data?.shortDescription}</p>
            <div className={styles.buttonBlock}>
              <Link to={`/film/${data.id}`}>
                <Button className={styles.button}>Смотреть фильм</Button>
              </Link>
            </div>
          </div>
        </BackdropImage>
      </div>
    </section>
  )
})

export default RandomFilm
