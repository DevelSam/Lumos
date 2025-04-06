import Modal from '../Modal/Modal'
import styles from './LoginForm.module.css'
export default function LoginForm({ open, setOpen, toggle }) {
  const openWatchModal = () => {
    setOpen(true)
  }

  const closeWatchModal = () => {
    setOpen(false)
  }
  return (
    <div className='header-kabinet'>
      <div onClick={openWatchModal} className='header-kabinet__img' />
      <Modal isOpen={open} onClose={closeWatchModal}>
        <div className={styles.container}>
          <h1 className={styles.title}>Авторизация</h1>
          <hr className={styles.line} />
          <form action='' className={styles.form}>
            <label htmlFor='log'>Логин</label>
            <input name='login' id='log' type='text' placeholder='Логин' required />
            <label htmlFor='pas'>Пароль</label>
            <input name='password' minLength={8} id='pas' type='password' placeholder='Пароль' required />
            <button className={`hero-watch__button ${styles.button}`}>Отправить</button>
          </form>
          <div className={styles.redirect}>
            <p className={styles.registration}>
              Ещё не зарегестрировались?{' '}
              <span
                onClick={() => {
                  toggle()
                }}
              >
                Зарегестрироваться
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
