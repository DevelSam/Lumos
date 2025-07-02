import CategoryPage from '../pages/CategoryPage/CategoryPage'
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage'
import MainPage from '../pages/MainPage'
import MoviePage from '../pages/MoviePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import AuthicationPage from '../pages/AuthicationPage/AuthicationPage'
import ActorPage from '../pages/ActorPage/ActorPage'

const ConstRoutes = [
  {
    to: '/',
    Component: MainPage,
    isAuth: false,
  },
  {
    to: '/collections/:list',
    Component: CollectionsPage,
    isAuth: false,
  },
  {
    to: '/movies/:type',
    Component: CategoryPage,
    isAuth: false,
  },
  {
    to: '/film/:id',
    Component: MoviePage,
    isAuth: true,
  },
  {
    to: '/profile',
    Component: ProfilePage,
    isAuth: true,
  },
  {
    to: '/auth',
    Component: AuthicationPage,
    isAuth: false,
  },
  {
    to: '/actor/:id',
    Component: ActorPage,
    isAuth: true,
  },
]
export default ConstRoutes
