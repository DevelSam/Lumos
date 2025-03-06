import './Footer.css'
import telegram from '../../assets/icons8-telegram-app.svg'
import vk from '../../assets/icons8-vk-circled.svg'
import youtube from '../../assets/icons8-youtube.svg'
export default function Footer(){
    return(
        <footer>
            <hr className="footer-line__top" />
            <div className="container footer-container">
                <div className="footer-content">
                    <ul className="footer-list">
                        <li className="footer-list__item"><a href="" className="footer-list__link"><img src={telegram} alt="" className="footer-list__image" /></a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link"><img src={vk} alt="" className="footer-list__image" /></a></li>
                        <li className="footer-list__item"><a href="" className="footer-list__link"><img src={youtube} alt="" className="footer-list__image" /></a></li>
                    </ul>
                    <p className="footer-title">Мы всегда готовы вам помочь.</p>
                    <a className="footer-link">Задать вопрос</a>
                    
                </div>
                <hr className="footer-line__bottom" />
                <div className="footer-bottom">
                    <p className="copyright">© 2025 Lumos. Все права защищены</p>
                    <nav className='footer-nav'>
                        <a href="" className="nav-link">Политика конфиденциальности</a>
                        <a href="#" className="nav-link">Правила использования</a>
                    </nav>
                </div>
            </div>

        </footer>
    )
}