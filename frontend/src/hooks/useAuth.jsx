import { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'

const useAuth = () => {
  const { isAuth, setIsAuth, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const login = async (userInfo) => {
    setLoading(true)

    try {
      const response = await fetch('https://lumoserver.vercel.app/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userInfo.username, password: userInfo.password }),
      })
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('user', data.token)

        setIsAuth(true)
      } else {
        return data.message
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  const registration = async (userInfo) => {
    setLoading(true)
    try {
      const response = await fetch('https://lumoserver.vercel.app/api/user/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userInfo.username, password: userInfo.password }),
      })
      const data = await response.json()
      console.log(data)
      if (!response.ok) {
        return await data.message
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
      setLoading(false)
    }
    setLoading(false)
  }, [])
  const logoutUser = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
      setIsAuth(false)

      setUser('')
    }
  }
  return { isAuth, loading, login, registration, logoutUser }
}
export default useAuth
