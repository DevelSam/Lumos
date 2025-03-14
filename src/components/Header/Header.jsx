
import "./Header.css"
import { NavLink  } from "react-router-dom"
export default function Header(){
    return (
        <header className="header">
        <div className="container header-container">
            <div className="header-logo__block">
            <NavLink  className="header-logo__link" to='/'>
            Lumos
            </NavLink>
            </div>
            <nav className="header-nav">
            <ul className="header-list">
            <NavLink exact activeClassName="active"  className="header-list__item-link" to='/'>
            <li className="header-list__item">Главная</li>
            </NavLink>
            <NavLink exact activeClassName="active"  className="header-list__item-link" to='/movie'>
            <li className="header-list__item">Фильмы</li>
            </NavLink>
            <NavLink exact activeClassName="active"  className="header-list__item-link" to='/tv-series'>
            <li className="header-list__item">Cериалы</li>
            </NavLink>
            <NavLink exact activeClassName="active"  className="header-list__item-link" to="/category">
            <li className="header-list__item">Категории</li>
            </NavLink>
            </ul>
            </nav>
            <nav className="header-nav__kabinet">
            <div className="header-kabinet"><div className="header-kabinet__img" /></div>
           
            </nav>
        </div>
        </header>
    )
}