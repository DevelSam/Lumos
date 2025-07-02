import useAuth from '../hooks/useAuth'

import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import RequireAuth from './PrivateRoute/RequireAuth'
import ConstRoutes from '../constants/ConstRoutes'
export default function AppRouter() {
  const { checkAuth } = useAuth()
  useEffect(() => {
    if (localStorage.getItem('user')) {
      checkAuth()
    }
  }, [])
  return (
    <Routes>
      {ConstRoutes.map((el) => (
        <>
          <Route
            key={el.to}
            path={el.to}
            element={el.isAuth ? <RequireAuth>{<el.Component />}</RequireAuth> : <el.Component />}
          />
        </>
      ))}
    </Routes>
  )
}
