import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import './Modal.css'
// import { useEffect, useRef } from 'react'
export default function Modal({ isOpen, onClose, children }) {
  const nodeRef = useRef()

  return createPortal(
    <>
      <CSSTransition in={isOpen} timeout={300} classNames='modal' nodeRef={nodeRef} unmountOnExit>
        <div onClick={(e) => e.stopPropagation()} ref={nodeRef} className={`${styles.modal} `}>
          <div className={styles.content}>
            <div className={styles.close} onClick={onClose}></div>

            {children}
          </div>
          <div className={`${styles.background}`} onClick={onClose}></div>
        </div>
      </CSSTransition>
    </>,

    document.getElementById('portal'),
  )
}
