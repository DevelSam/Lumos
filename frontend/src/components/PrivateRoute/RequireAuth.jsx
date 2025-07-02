import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import Preloader from '../ui/Preloader/Preloader'
export default function RequireAuth({ children }) {
  const { isAuth, loading } = useAuth()

  if (loading) {
    return <Preloader />
  }
  return isAuth ? children : <Navigate to={'/auth'} replace={true} />
}
