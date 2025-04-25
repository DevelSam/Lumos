import styles from './ActorPage.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FetchActorId } from '../api/FetchActorId'
import Preloader from '../components/ui/Preloader/Preloader'
export default function ActorPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const { data: ActorData, isLoading: ActorLoading } = useQuery(['actorData', id], () => FetchActorId(id))

  return (
    <>
      <Header />
      <section key={id} className={styles.section}>
        <div className={`container ${styles.container}`}>
          {ActorLoading ? (
            <Preloader />
          ) : (
            <>
              {' '}
              <div className={styles.content}>
                <img src={ActorData.photo} alt='' className={styles.photo} />
                <div className={styles['content-actor']}>
                  <div className={styles['name-block']}>
                    <h1 className={styles.title}>{ActorData.name}</h1>

                    <h2 className={styles['title-small']}>{ActorData.enName}</h2>
                  </div>
                  <div className={styles['info-block']}>
                    <ul className={styles['info-list']}>
                      <li className={styles.sex}>{`Пол: ${ActorData.sex}`}</li>
                      <li className={styles.age}>{`Возраст: ${ActorData.age} год`}</li>
                      <li
                        className={styles.birthPlace}
                      >{`Место рождения  ${ActorData.birthPlace?.[0]?.value || 'неизвестно'}`}</li>
                      {/* <li className={styles.all}>{`Всего фильмов ${ActorData.movies.length}`}</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles['facts-block']}>
                {ActorData.facts.length > 0 ? <h3>Интересные факты:</h3> : null}

                <ul>
                  {ActorData.facts?.map((data, index) => (
                    <li key={index}>{data.value}</li>
                  ))}
                  {console.log(ActorData)}
                </ul>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
