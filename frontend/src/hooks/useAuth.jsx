import { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
const useAuth = () => {
  const { isAuth, setIsAuth, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsAuth(true)
      setLoading(false)
    }
    setLoading(false)
  }, [])
  const login = async (userInfo) => {
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userInfo.email, password: userInfo.password }),
      })
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('user', data.token)
        setUser(data.user)
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
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/registration`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userInfo.email, name: userInfo.name, password: userInfo.password }),
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

  const logoutUser = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user')
      setIsAuth(false)

      setUser('')
    }
  }
  const checkAuth = async () => {
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/info`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
      })
      const data = await response.json()
      if (response.status === 401) {
        logoutUser()
      }
      if (response.ok) {
        setIsAuth(true)
        setUser(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  return { isAuth, checkAuth, loading, login, registration, logoutUser }
}
export default useAuth
