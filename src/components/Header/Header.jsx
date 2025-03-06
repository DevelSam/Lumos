
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
            <li className="header-list__item"><a href="" className="header-list__item-link">Подписка</a></li>
            <li className="header-list__item"><a href="" className="header-list__item-link">Моё</a></li>
            <li className="header-list__item"><a href="" className="header-list__item-link">Категории</a></li>
            </ul>
            </nav>
            <nav className="header-nav__kabinet">
            <div className="header-kabinet"><div className="header-kabinet__img" /></div>
           
            </nav>
        </div>
        </header>
    )
}