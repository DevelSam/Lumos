import { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAuth from './useAuth'

const useUserData = () => {
  const [loading, setLoading] = useState(true)
  const { logoutUser } = useAuth()
  const { setUser } = useContext(AuthContext)
  const getUserInfo = async () => {
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/info`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
      })
      const data = await response.json()
      if (response.status === 403) {
        logoutUser()
      }
      if (response.ok) {
        setUser(data)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  return { getUserInfo, loading }
}
export default useUserData
