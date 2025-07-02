import { NavLink, Link } from 'react-router-dom'
import Search from '../Search/Search'
import styles from './Header.module.css'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
import Button from '../ui/Button/Button'
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
        <div className={styles.logoBlock}>
          <NavLink className={styles.logoLink} to='/'>
            Lumos
          </NavLink>
        </div>
        <div className={styles.burger}>
          <span
            onClick={() => SetIsActive(!active)}
            className={`${styles.burgerLine} ${active ? styles.activeBurger : ' '} `}
          ></span>
        </div>
        <div className={`${styles.content}  ${active ? styles.activeBurger : ' '}`}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.itemLink}`} to='/'>
                <li className={styles.item}>Главная</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.itemLink}`}
                to='/movies/movie'
              >
                <li className={styles.item}>Фильмы</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.itemLink}`}
                to='/movies/tv-series'
              >
                <li className={styles.item}>Cериалы</li>
              </NavLink>
              <NavLink
                onClick={() => SetIsActive(false)}
                className={({ isActive }) => (isActive ? styles.active : '') + ` ${styles.itemLink}`}
                to='/category'
              >
                <li className={styles.item}>Категории</li>
              </NavLink>
            </ul>
          </nav>
          <div className={styles.searchBlock}>
            <Search />

            <Link to={isAuth ? '/profile' : '/auth'}>
              <Button className={styles.button} type='primary'>
                {isAuth ? 'Профиль' : 'Войти'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
