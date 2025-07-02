import styles from './Button.module.css'
function Button({ type = 'primary', className, children, ...attributesChildren }) {
  return (
    <button
      className={`${className || ' '} ${type === 'primary' ? styles.primary : styles.secondary} `}
      {...attributesChildren}
    >
      {children}
    </button>
  )
}

export default Button
