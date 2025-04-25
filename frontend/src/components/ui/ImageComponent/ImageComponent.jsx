import placeholder from '../../../assets/Placeholder.svg'
import { useState } from 'react'
export const ImageComponent = ({ src, alt, height }) => {
  const [loaded, setLoaded] = useState(false)
  const handleImageLoad = () => {
    setLoaded(true)
  }
  return (
    <div style={{ position: 'relative', width: '100%', height: `100%` }}>
      {!loaded && (
        <img
          src={placeholder}
          alt='placeholder'
          style={{ width: '100%', height: `auto`, position: 'absolute', top: 0, left: 0 }}
        />
      )}

      <img
        loading='lazy'
        src={src ? src : placeholder}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ width: '100%', height: height ? height : 'auto', opacity: loaded ? 1 : 0, objectFit: 'cover' }}
      />
    </div>
  )
}
