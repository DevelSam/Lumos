import { NavLink, Link } from 'react-router-dom'
import Search from '../Search/Search'
import styles from './Header.module.css'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
export default function Header() {
  const { isAuth } = useAuth()
  const [active, SetIsActive] = useState(false)
  useEffect(() => {
    if (active) {
      document.body.classList.add('unscroll')
    } else {
      document.body.classList.remove('unscroll')
    }

    return () => {
      document.body.classList.remove('unscroll')
    }
  }, [active])
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles['logo-block']}>
          <NavLink className={styles['logo-link']} to='/'>
            Lumos
          </NavLink>
        </div>
        <div className={styles.burger}>
          <span
            onClick={() => SetIsActive(!active)}
            className={`${styles['burger-line']} ${active ? styles.activeBurger : ' '} `}
          ></span>
        </div>
        <div className={`${styles.content}  ${active ? styles.activeBurger : ' '}`}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <NavLink
                //   activeClassName={'active'}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles['item-link']}`}
                to='/'
              >
                <li className={styles.item}>Главная</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles['item-link']}`}
                to='/movies/movie'
              >
                <li className={styles.item}>Фильмы</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles['item-link']}`}
                to='/movies/tv-series'
              >
                <li className={styles.item}>Cериалы</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles['item-link']}`}
                to='/category'
              >
                <li className={styles.item}>Категории</li>
              </NavLink>
            </ul>
          </nav>
          <div className={styles['search-block']}>
            <Search />
            {/* <button className={`${styles['button-tarif']} button-watch `}>Выбрать тариф</button> */}
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
      </div>
    </header>
  )
}
