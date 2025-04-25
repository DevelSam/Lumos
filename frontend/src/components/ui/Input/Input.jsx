import styles from './Input.module.css'

const Input = ({ onChange, label, name, ...childreAttributes }) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} {...childreAttributes} onChange={onChange} name={name} />
    </>
  )
}
export default Input
