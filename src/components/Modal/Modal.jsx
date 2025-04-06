import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null
  }
  console.log(isOpen)
  console.log(onClose)
  return createPortal(
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.close} onClick={onClose}></div>

        {children}
      </div>
    </div>,

    document.body,
  )
}
