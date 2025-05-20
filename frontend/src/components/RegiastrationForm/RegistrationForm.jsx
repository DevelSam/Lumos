import styles from './RegistrationForm.module.css'
import Input from '../ui/Input/Input'
import Form from '../ui/Form/Form'
import useAuth from '../../hooks/useAuth'
import { useState } from 'react'
export default function RegistrationForm({ toggle }) {
  const { registration } = useAuth()
  const [error, setError] = useState()
  const [formData, setFormData] = useState({ email: '', name: '', password: '', repassword: '' })
  const hundleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password == formData.repassword) {
      const check = await registration(formData)
      console.log(check)
      if (!check) {
        setError('')
        toggle()
      }
      setError(check)
    } else {
      setError('Пароли не совпадают!')
    }
  }
  return (
    <Form onSubmit={hundleSubmit} nameForm='Регистрация'>
      <Input
        name='login'
        label={'Email'}
        type='email'
        placeholder='Логин'
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        name='name'
        label={'Имя'}
        type='text'
        placeholder='Иван'
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        name='password'
        label={'Пароль'}
        type='password'
        placeholder='Пароль'
        required
        minLength={8}
        maxLength={20}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <Input
        name='passwordRetry'
        label={'Повторите пароль'}
        type='password'
        placeholder='Повторный Пароль'
        minLength={8}
        maxLength={20}
        required
        onChange={(e) => setFormData({ ...formData, repassword: e.target.value })}
      />
      <div className={styles.redirect}>
        <p className={styles.authication}>
          Уже зарегестрировались?
          <span
            onClick={() => {
              toggle()
            }}
            href='#'
          >
            Войти
          </span>
        </p>
        <p className={styles.error} style={error ? { opacity: 1 } : { opacity: 0 }}>
          {error || ' '}
        </p>
      </div>
    </Form>
  )
}
