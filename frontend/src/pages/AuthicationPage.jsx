import LoginForm from '../components/LoginForm/LoginForm'
import RegistrationForm from '../components/RegiastrationForm/RegistrationForm'
import { useState } from 'react'
import styles from './AuthicationPage.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import background from '../assets/9405c291.jpg'
export default function AuthicationPage() {
  const [showLogin, setShowLogin] = useState(true)

  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <>
      <Header />
      <section className={`section ${styles.section}`} style={{ backgroundImage: `url(${background})` }}>
        <div className={styles.container}>
          {showLogin ? <LoginForm toggle={toggleShowLogin} /> : <RegistrationForm toggle={toggleShowLogin} />}
        </div>
      </section>
      <Footer />
    </>
  )
}
