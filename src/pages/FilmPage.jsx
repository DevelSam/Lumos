import { useParams, Link } from 'react-router-dom'
// import { useNavigate} from "react-router-dom";
import { useInfiniteQuery, useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageComponent } from '../components/ImageComponent/ImageComponent'
import { FetchAllGenre } from '../api/FetchAllGenre'
import 'swiper/css'
import 'swiper/css/bundle'
import Preloader from '../components/Preloader/Preloader'
import { Autoplay } from 'swiper/modules'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './FilmPage.module.css'
import { FetchCurrentGenre } from '../api/FetchCurrentGenre'
import { useState, useRef, useEffect } from 'react'
export default function MoviesPage() {
  // const navigate = useNavigate();
  const param = useParams()
  const cotnainerRef = useRef()
  const type = param.type
  const [genre, setGenre] = useState('')
  console.log(genre)
  const { data: allGenreData, isLoading: allGenreLoading } = useQuery('allGenreData', FetchAllGenre)
  const {
    data: currentGenreData,
    isLoading: currentGenreLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
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

  console.log(currentGenreData)
  // const handleButtonClick = (e) => {
  //     // Останавливаем распространение события, чтобы слайдер не реагировал на клик
  //     e.stopPropagation();
  // };
  // useEffect(() => {
  //     if (allGenreData && allGenreData.length > 0) {
  //       // Проверяем текущий URL, чтобы не перенаправлять, если пользователь уже выбрал жанр
  //       const currentPath = window.location.pathname;
  //       if (currentPath === '/' || currentPath === '/type') {
  //         navigate(`/type/${allGenreData[0].name}`, { replace: true });
  //       }
  //     }
  //   }, [allGenreData, navigate]);
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
                  <Swiper
                    modules={[Autoplay]}
                    className={styles[`Movie-slider`]}
                    slidesPerView={7.5}
                    spaceBetween='10px'
                    speed={500}
                  >
                    <SwiperSlide>
                      <div
                        onClick={(e) => {
                          e.preventDefault()
                          setGenre('')
                        }}
                        className={`${styles.button} button`}
                      >
                        Все категории
                      </div>
                    </SwiperSlide>
                    {allGenreData.map((value, index) => (
                      <SwiperSlide key={index}>
                        {/* <Link to={`/type/${value.name}` } className={styles.link}  onClick={handleButtonClick}> */}
                        <div
                          onClick={(e) => {
                            e.preventDefault()
                            setGenre(encodeURI(value.name))
                          }}
                          className={`${styles.button} button`}
                        >
                          {value.name}
                        </div>
                        {/* </Link> */}
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* <Outlet /> */}
                  {currentGenreLoading ? (
                    <Preloader />
                  ) : (
                    <>
                      {currentGenreData.pages.map((data) =>
                        data.docs.map((movie, index, docs) => (
                          <>
                            <Link key={movie.id} className={styles.content} to={`/film/${movie.id}`}>
                              <div ref={index + 1 === docs.length ? cotnainerRef : null}>
                                <div className={styles.block}>
                                  <ImageComponent src={movie.poster?.url} alt='' loading='lazy' />
                                </div>
                                <p className={styles.name}>{movie.name}</p>
                              </div>
                            </Link>
                          </>
                        )),
                      )}
                    </>
                  )}
                </div>
                {currentGenreLoading ? (
                  ''
                ) : (
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    className={`${
                      !hasNextPage || isFetchingNextPage ? styles.disabled : ' '
                    }  +  button ${(styles[`button-next`], styles.button)} `}
                  >
                    Показать ещё
                  </button>
                )}
              </div>
            </section>
          </main>
          <Footer ref={cotnainerRef} />
        </>
      )}
    </>
  )
}
