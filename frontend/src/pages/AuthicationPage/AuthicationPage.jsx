import LoginForm from '../../components/LoginForm/LoginForm'
import RegistrationForm from '../../components/RegiastrationForm/RegistrationForm'
import { useState } from 'react'
import styles from './AuthicationPage.module.css'

import background from '../../assets/9405c291.jpg'
import Layout from '../../components/ui/Layout/Layout'
export default function AuthicationPage() {
  const [showLogin, setShowLogin] = useState(true)

  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <>
      <Layout>
        <section className={`section ${styles.section}`} style={{ backgroundImage: `url(${background})` }}>
          <div className={styles.container}>
            {showLogin ? <LoginForm toggle={toggleShowLogin} /> : <RegistrationForm toggle={toggleShowLogin} />}
          </div>
        </section>
      </Layout>
    </>
  )
}
