import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import Search from '../Search/Search'
import styles from './Header.module.css'
import useAuth from '../../hooks/useAuth'
export default function Header() {
  const { isAuth } = useAuth()

  return (
    <header className='header'>
      <div className='container header-container'>
        <div className='header-logo__block'>
          <NavLink className='header-logo__link' to='/'>
            Lumos
          </NavLink>
        </div>
        <nav className='header-nav'>
          <ul className='header-list'>
            <NavLink
              //   activeClassName={'active'}
              className={({ isActive }) => (isActive ? 'active' : '') + ' header-list__item-link'}
              to='/'
            >
              <li className='header-list__item'>Главная</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '') + ' header-list__item-link'}
              to='/movies/movie'
            >
              <li className='header-list__item'>Фильмы</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '') + ' header-list__item-link'}
              to='/movies/tv-series'
            >
              <li className='header-list__item'>Cериалы</li>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '') + ' header-list__item-link'}
              to='/category'
            >
              <li className='header-list__item'>Категории</li>
            </NavLink>
          </ul>
        </nav>
        <div className='header-nav__last-block'>
          <Search />
          <button className={`${styles['button-tarif']} button-watch `}>Выбрать тариф</button>
          <Link to={isAuth ? '/profile' : '/auth'}>
            {/* <nav className='header-nav__kabinet'>
              <div className='header-kabinet'>
                <img className='header-kabinet__img' src={iconUser} alt='' />
              </div>
              
            </nav> */}
            <button className={`button-watch ${styles.button}`}>{isAuth ? 'Профиль' : 'Войти'}</button>
          </Link>
        </div>
      </div>
    </header>
  )
}
