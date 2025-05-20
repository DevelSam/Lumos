import { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import Preloader from '../components/ui/Preloader/Preloader'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'

import AuthContext from '../context/AuthContext'

import UserQuestions from '../components/UserQuestions/UserQuestions'

export default function ProfilePage() {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()
  const { user, loading } = useContext(AuthContext)
  const handleClick = () => {
    logoutUser()
    navigate('/auth')
  }

  return (
    <>
      <Header />
      <Preloader loading={loading} />
      <section className='section'>
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
      <Footer />
    </>
  )
}
