import styles from './Footer.module.css'
import telegram from '../../assets/icons8-telegram-app.svg'
import vk from '../../assets/icons8-vk-circled.svg'
import youtube from '../../assets/icons8-youtube.svg'
import QuestionsModal from '../QuestionModal/QuestionModal'
import { useState } from 'react'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  return (
    <footer>
      <hr className={styles.footerLineTop} />
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}>
              <a href='' className={styles.footerListLink}>
                <img src={telegram} alt='' className={styles.footerListImage} />
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href='' className={styles.footerListLink}>
                <img src={vk} alt='' className={styles.footerListImage} />
              </a>
            </li>
            <li className={styles.footerListItem}>
              <a href='' className={styles.footerListLink}>
                <img src={youtube} alt='' className={styles.footerListImage} />
              </a>
            </li>
          </ul>
          <p className={styles.footerTitle}>Мы всегда готовы вам помочь.</p>
          <a onClick={handleOpen} className={styles.footerLink}>
            Задать вопрос
          </a>
          <QuestionsModal open={isOpen} setOpen={setIsOpen} />
        </div>
        <hr className={styles.footerLineBottom} />
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 Lumos. Все права защищены</p>
          <nav className={styles.footerNav}>
            <a href='' className={styles.navLink}>
              Политика конфиденциальности
            </a>
            <a href='#' className={styles.navLink}>
              Правила использования
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
