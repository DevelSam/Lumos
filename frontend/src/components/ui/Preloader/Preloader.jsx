import styles from './Preloader.module.css'

export default function Preloader(){
    return(
        
            <div className={styles.block}>
                <p className={styles.load}>Loading...</p>
            </div>
    )
}