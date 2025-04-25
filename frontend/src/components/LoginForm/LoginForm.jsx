import { useState } from 'react'
import styles from './LoginForm.module.css'
import Input from '../ui/Input/Input'
import Form from '../ui/Form/Form'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
export default function LoginForm({ toggle }) {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState()
  const [formData, setFormData] = useState({ username: '', password: '' })
  const hundleSubmit = async (e) => {
    e.preventDefault()
    if (formData.username !== ' ' && formData.password !== ' ') {
      const check = await login(formData)
      console.log(check)
      if (!check) {
        setError('')

        navigate('/')
      }
      setError(check)
    }
  }

  return (
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
        maxLength={20}
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
        <p className={styles.error} style={error ? { opacity: 1 } : { opacity: 0 }}>
          {error || ' '}
        </p>
      </div>
    </Form>
  )
}
