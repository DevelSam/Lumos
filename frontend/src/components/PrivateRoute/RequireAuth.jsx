import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
export default function RequireAuth({ children }) {
  const { isAuth } = useAuth()
  return isAuth ? children : <Navigate to={'/auth'} replace={true} />
}
