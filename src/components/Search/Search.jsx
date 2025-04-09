import { useEffect, useState, memo, useRef } from 'react'
import styles from './Search.module.css'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { FetchSearch } from '../../api/FetchSearch'
const Search = memo(function Search() {
  const [visible, setIsVisible] = useState(false)
  const [value, setValue] = useState('')
  const [query, setQuery] = useState('')
  const { data: queryData, loading: queryLoading } = useQuery(['query', query], () => FetchSearch(query))
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
      {visible && <div className={styles.overlay} onClick={hundleFocus}></div>}
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
        <ul className={`${styles.list}`} style={query.length > 0 ? { opacity: 1 } : { opacity: 0 }}>
          {console.log(queryData)}
          {query.length === 0 && queryLoading === undefined
            ? ' '
            : queryLoading
              ? ' '
              : queryData?.docs.map((movie) => (
                  <>
                    <Link to={`/film/${movie.id}`}>
                      <li key={movie.id}>
                        <img className={styles.poster} src={movie.poster.url} alt='' />
                        <p>{movie.name ? movie.name : movie.alternativeName}</p>
                      </li>
                    </Link>
                  </>
                ))}
        </ul>
      </div>
    </>
  )
})
export default Search
