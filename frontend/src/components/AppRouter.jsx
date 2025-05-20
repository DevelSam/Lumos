import useAuth from '../hooks/useAuth'
import ActorPage from '../pages/ActorPage'
import CollectionsPage from '../pages/CollectionsPage'
import MainPage from '../pages/MainPage'
import CategoryPage from '../pages/CategoryPage'
import MoviePage from '../pages/MoviePage'
import AuthicationPage from '../pages/AuthicationPage'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import RequireAuth from './PrivateRoute/RequireAuth'
import ProfilePage from '../pages/ProfilePage'

export default function AppRouter() {
  const { checkAuth } = useAuth()
  useEffect(() => {
    if (localStorage.getItem('user')) {
      checkAuth()
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/actor/:id' element={<ActorPage />} />
        <Route path='/category' element={<MainPage />}></Route>
        <Route path='/collections/:list' element={<CollectionsPage />} />
        <Route path='/movies/:type' element={<CategoryPage />}></Route>
        <Route path='/auth' element={<AuthicationPage />}></Route>
        <Route
          path='/film/:id'
          element={
            <RequireAuth>
              <MoviePage />
            </RequireAuth>
          }
        />
        <Route
          path={'/profile'}
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}
