import placeholder from '../../../assets/Placeholder.svg'
import styles from './Image.module.css'
import { useState } from 'react'
export const ImageComponent = ({ src, alt, height }) => {
  const [loaded, setLoaded] = useState(false)
  const handleImageLoad = () => {
    setLoaded(true)
  }
  return (
    <div className={styles.container}>
      {!loaded && (
        <img
          className={styles.preloader}
          src={placeholder}
          alt='placeholder'
          style={{ width: '100%', height: `auto` }}
        />
      )}
      <img
        className={styles.img}
        loading='lazy'
        src={src ? src : placeholder}
        alt={alt}
        onLoad={handleImageLoad}
        style={{
          width: '100%',
          opacity: loaded ? 1 : 0,
          height: height ? height : 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
