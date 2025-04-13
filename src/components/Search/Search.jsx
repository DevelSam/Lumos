import { useEffect, useState, memo, useRef } from 'react'
import styles from './Search.module.css'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { FetchSearch } from '../../api/FetchSearch'
import { ImageComponent } from '../ImageComponent/ImageComponent'
const Search = memo(function Search() {
  const [visible, setIsVisible] = useState(false)
  const [value, setValue] = useState('')
  const [query, setQuery] = useState(' ')
  const { data: queryData, loading: queryLoading } = useQuery(['query', query], () => FetchSearch(query), {
    keepPreviousData: true,
  })
  const search = useRef(null)
  const hundleFocus = () => {
    setIsVisible(!visible)
    setValue('')
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      setQuery(encodeURI(value))
    }, 600)
    return () => clearTimeout(Debounce)
  }, [value])
  return (
    <>
      <div ref={search} className={styles.search}>
        <div className={styles['input-block']}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id='search'
            onFocus={hundleFocus}
            onBlur={hundleFocus}
            className={styles.bar}
            type='text'
            placeholder='Найти фильм...'
          />
        </div>
        {queryLoading ? null : (
          <ul className={`${styles.list}`} style={visible > 0 ? { opacity: 1 } : { opacity: 0, visibility: 'hidden' }}>
            {console.log('СЮДА ', queryData)}
            {queryData?.total > 0 ? (
              queryData.docs.map((movie) => (
                <>
                  <Link to={`/film/${movie.id}`}>
                    <li key={movie.id}>
                      <ImageComponent className={styles.poster} src={movie.poster.url} alt='' />
                      <p>{movie.name ? movie.name : movie.alternativeName}</p>
                    </li>
                  </Link>
                </>
              ))
            ) : (
              <li>Не найдено</li>
            )}
          </ul>
        )}

        {/* )} */}
      </div>
      <div
        className={styles.overlay}
        style={visible ? { opacity: 0.5 } : { opacity: 0, visibility: 'hidden' }}
        onClick={visible ? hundleFocus : null}
      ></div>
    </>
  )
})
export default Search
