import styles from './Preloader.module.css'
import { CSSTransition } from 'react-transition-group'
export default function Preloader({ loading }) {
  return (
    <CSSTransition in={loading} classNames={'preloader'} unmountOnExit timeout={500}>
      <div className={styles.block}>
        <div className={styles.load}></div>
      </div>
    </CSSTransition>
  )
}
