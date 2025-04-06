import styles from './RegistrationForm.module.css'

import Modal from '../Modal/Modal'
export default function RegistrationForm({ open, setOpen, toggle }) {
  const openWatchModal = () => {
    setOpen(true)
  }

  const closeWatchModal = () => {
    console.log('close')
    setOpen(false)
    console.log(open)
  }
  return (
    <div className='header-kabinet'>
      <div onClick={openWatchModal} className='header-kabinet__img' />
      <Modal isOpen={open} onClose={closeWatchModal}>
        <div className={styles.container}>
          <h1 className={styles.title}>Регистрация</h1>
          <hr className={styles.line} />
          <form action='' className={styles.form}>
            <label htmlFor='log'>Логин</label>
            <input name='login' id='log' type='text' placeholder='Логин' required />
            <label htmlFor='pas'>Пароль</label>
            <input name='password' id='pas' type='password' placeholder='Пароль' required minLength={8} />
            <label htmlFor='pasTwo'>Повторите пароль</label>
            <input
              name='passwordRetry'
              id='pasTwo'
              type='password'
              placeholder='Повторный Пароль'
              minLength={8}
              required
            />
            <button type='submit' className={`hero-watch__button ${styles.button}`}>
              Отправить
            </button>
          </form>
          <div className={styles.redirect}>
            <p className={styles.authication}>
              Уже зарегестрировались?
              <span
                onClick={() => {
                  toggle()
                }}
                href='#'
              >
                Войти
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
