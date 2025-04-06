import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegiastrationForm/RegistrationForm'
import { useState } from 'react'
export default function AuthicationForm() {
  const [showLogin, setShowLogin] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div>
      {showLogin ? (
        <LoginForm setOpen={setModalOpen} open={modalOpen} toggle={toggleShowLogin} />
      ) : (
        <RegistrationForm open={modalOpen} setOpen={setModalOpen} toggle={toggleShowLogin} />
      )}
    </div>
  )
}
