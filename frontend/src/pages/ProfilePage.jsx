import { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import Preloader from '../components/ui/Preloader/Preloader'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'
import { useQuery } from 'react-query'
import AuthContext from '../context/AuthContext'
import useUserData from '../hooks/useUserData'
import UserQuestions from '../components/UserQuestions/UserQuestions'
export default function ProfilePage() {
  const { logoutUser } = useAuth()
  const { getUserInfo } = useUserData()
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { isLoading: load } = useQuery('userInfo', () => getUserInfo())
  const handleClick = () => {
    logoutUser()
    navigate('/auth')
  }
  return (
    <>
      <Header />
      <Preloader loading={load} />
      <section className='section'>
        <div className={`container ${styles.container}`}>
          {!load && (
            <>
              <p>
                {`Имя: ${user.name}`} {console.log(user)}
              </p>
              <UserQuestions />
              <button onClick={handleClick} className={`${styles.button} button-watch `}>
                Выйти
              </button>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
