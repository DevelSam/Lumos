import styles from './ActorPage.module.css'

import { ImageComponent } from '../../components/ui/ImageComponent/ImageComponent'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { FetchActorId } from '../../api/FetchActorId'
import Preloader from '../../components/ui/Preloader/Preloader'
import Layout from '../../components/ui/Layout/Layout'
export default function ActorPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const { data: ActorData, isLoading: ActorLoading } = useQuery(['actorData', id], () => FetchActorId(id))

  return (
    <>
      <Layout>
        <section className={styles.section}>
          <Preloader loading={ActorLoading} />
          <div className={`container ${styles.container}`}>
            {!ActorLoading && (
              <>
                <div className={styles.content}>
                  <div className={styles.image}>
                    <ImageComponent src={ActorData.photo} alt='' className={styles.photo} />
                  </div>
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
                  </ul>
                </div>
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}
