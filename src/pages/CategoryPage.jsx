import { useParams } from 'react-router-dom'
// import { useNavigate} from "react-router-dom";
import { useInfiniteQuery, useQuery } from 'react-query'
// import { ImageComponent } from '../components/ImageComponent/ImageComponent'
import { FetchAllGenre } from '../api/FetchAllGenre'

import Preloader from '../components/Preloader/Preloader'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './CategoryPage.module.css'
import { FetchCurrentGenre } from '../api/FetchCurrentGenre'
import { useState, useRef, useEffect } from 'react'
import CategorySliderButtons from '../components/CategorySliderButtons/CategorySliderButtons'
import CategoryMovieList from '../components/CategoryMovieList/CategoryMovieList'
export default function CategoryPage() {
  // const navigate = useNavigate();
  const param = useParams()
  const cotnainerRef = useRef()
  const type = param.type
  const [genre, setGenre] = useState('')
  const { data: allGenreData, isLoading: allGenreLoading } = useQuery('allGenreData', FetchAllGenre)
  const {
    data: currentGenreData,
    isLoading: currentGenreLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ['currentGenreData', genre, type],
    ({ pageParam = 1 }) => FetchCurrentGenre(genre, type, pageParam),

    {
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.docs.length === 0) {
          return undefined
        }
        return allPages.length + 1
      },
    },
  )

  const hundleScroll = (entries, observe) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      observe.unobserve(cotnainerRef.current)
      fetchNextPage()
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(hundleScroll, { threshold: 0.8 })
    if (cotnainerRef.current) observer.observe(cotnainerRef.current)
    console.log('123' + cotnainerRef.current)
    return () => {
      if (cotnainerRef.current) observer.unobserve(cotnainerRef.current)
    }
  }, [cotnainerRef, currentGenreLoading, currentGenreData])

  return (
    <>
      {allGenreLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main>
            <section className='section'>
              <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>
                  Добро пожаловать на Lumos - онлайн кинотеатр с более чем 960 тысячами фильмов и сериалов!
                </h1>
                <p className={styles.info}>По жанрам:</p>
                <div className={styles['content-block']}>
                  <CategorySliderButtons data={allGenreData} setState={setGenre} />
                  {currentGenreLoading ? (
                    <Preloader />
                  ) : (
                    <CategoryMovieList data={currentGenreData} ref={cotnainerRef} />
                  )}
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
