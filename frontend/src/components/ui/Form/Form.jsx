import styles from './Form.module.css'

const Form = ({ className, onSubmit, children, nameForm }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{nameForm}</h1>
      <hr className={styles.line} />
      <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
        {children}
        <button className={`hero-watch__button ${styles.button}`} type='submit'>
          Отправить
        </button>
      </form>
    </div>
  )
}
export default Form
