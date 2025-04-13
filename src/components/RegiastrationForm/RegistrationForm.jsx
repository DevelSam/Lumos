import styles from './RegistrationForm.module.css'
import Input from '../Input/Input'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
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
        <Form nameForm='Регистрация'>
          <Input name='login' label={'Логин'} type='text' placeholder='Логин' required />
          <Input name='password' label={'Пароль'} type='password' placeholder='Пароль' required minLength={8} />
          <Input
            name='passwordRetry'
            label={'Повторите пароль'}
            type='password'
            placeholder='Повторный Пароль'
            minLength={8}
            required
          />
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
        </Form>
      </Modal>
    </div>
  )
}
