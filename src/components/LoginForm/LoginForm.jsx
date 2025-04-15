import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './LoginForm.module.css'
import Input from '../Input/Input'
import Form from '../Form/Form'
export default function LoginForm({ open, setOpen, toggle }) {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const hundleSubmit = (e) => {
    e.preventDefault()
    if (formData.username !== ' ' && formData.password !== ' ') {
      console.log(formData)
    }
  }
  const openWatchModal = () => {
    setOpen(true)
  }

  const closeWatchModal = () => {
    setOpen(false)
  }
  return (
    <div className='header-kabinet'>
      <div onClick={openWatchModal} className={`header-kabinet__img`} />
      <Modal isOpen={open} onClose={closeWatchModal}>
        <Form nameForm='Авторизация' onSubmit={hundleSubmit} className={styles.form}>
          <Input
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            name='login'
            label={'Логин'}
            type='text'
            placeholder='Логин'
            required
          />
          <Input
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            name='password'
            label={'Пароль'}
            minLength={8}
            type='password'
            placeholder='Пароль'
            required
          />
          <div className={styles.redirect}>
            <p className={styles.registration}>
              Ещё не зарегестрировались?{' '}
              <span
                onClick={() => {
                  toggle()
                }}
              >
                Зарегестрироваться
              </span>
            </p>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
