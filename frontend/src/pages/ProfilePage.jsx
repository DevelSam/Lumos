import { useContext } from 'react'

import Preloader from '../components/ui/Preloader/Preloader'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'

import AuthContext from '../context/AuthContext'

import UserQuestions from '../components/UserQuestions/UserQuestions'
import Layout from '../components/ui/Layout/Layout'

export default function ProfilePage() {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()
  const { user, loading } = useContext(AuthContext)
  const handleClick = () => {
    logoutUser()
    navigate('/auth')
  }

  return (
    <Layout>
      <Preloader loading={loading} />
      <section className={styles.section}>
        <h1 className={styles.title}>Профиль</h1>
        <div className={`container ${styles.container}`}>
          {!loading && (
            <>
              <div className={styles.info}>
                <span>{`Ваше имя:`}</span>
                <span>{user.name}</span>
              </div>
              <UserQuestions />
              <button onClick={handleClick} className={`${styles.button} button-watch `}>
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}
