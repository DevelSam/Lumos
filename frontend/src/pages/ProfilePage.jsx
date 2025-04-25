import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import useUserInfo from '../hooks/useUserInfo'
import Preloader from '../components/ui/Preloader/Preloader'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.css'
export default function ProfilePage() {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()
  const { user, getUserInfo, loading } = useUserInfo()
  useEffect(() => {
    getUserInfo()
  }, [])
  const handleClick = () => {
    logoutUser()
    navigate('/auth')
  }
  return (
    <>
      <Header />
      <section className='section'>
        <div className={`container ${styles.container}`}>
          {loading ? (
            <Preloader />
          ) : (
            <p>
              {`Имя: ${user.name}`} {console.log(user)}
            </p>
          )}
          <button
            onClick={handleClick}
            className={`${styles.button} button-watch `}
            style={{ border: 0, fontSize: 18, padding: 15 }}
          >
            Выйти
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}
