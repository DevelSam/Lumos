import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const useUserInfo = () => {
  const { isAuth, user, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const getUserInfo = async () => {
    setLoading(true)
    if (!isAuth) {
      return 'Пользователь не авторизован'
    }
    try {
      const response = await fetch('https://lumoserver.vercel.app/api/user/info', {
        headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
      })
      const data = await response.json()

      if (response.ok) {
        setUser(data)
      } else {
        return data.message
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return { loading, user, getUserInfo }
}
export default useUserInfo
