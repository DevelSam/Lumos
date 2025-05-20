import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryMovieList.module.css'
import { ImageComponent } from '../ui/ImageComponent/ImageComponent'
const CategoryMovieList = React.forwardRef(({ data }, ref) => {
  return (
    <>
      {data.pages.map((data) =>
        data.docs.map((movie, index, docs) => (
          <Link key={`${movie.id}-category`} className={styles.content} to={`/film/${movie.id}`}>
            <div ref={index + 1 === docs.length ? ref : null}>
              <div className={styles.block}>
                <ImageComponent src={movie.poster?.url} alt='' loading='lazy' />
              </div>
              <p className={styles.name}>{movie.name}</p>
            </div>
          </Link>
        )),
      )}
    </>
  )
})

CategoryMovieList.displayName = 'CategoryMovieList'
export default CategoryMovieList
