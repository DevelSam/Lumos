import Button from '../Button/Button'
import styles from './Form.module.css'

const Form = ({ className, onSubmit, children, nameForm }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{nameForm}</h1>
      <hr className={styles.line} />
      <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
        {children}
        <Button className={styles.button} type='primary'>
          Отправить
        </Button>
      </form>
    </div>
  )
}
export default Form
