import { useEffect, useState } from 'react'
import placeholder from '../../../assets/Placeholder.svg'
export const BackdropImage = ({ className, src, children }) => {
  const [loaded, setLoading] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = src

    image.onload = () => setLoading(true)
  }, [src])
  {
    console.log(placeholder)
  }
  return (
    <div
      className={`random-content ${loaded ? 'loaded' : ''} ${className}`}
      style={{
        backgroundImage: `url(${loaded ? src : placeholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.4s ',
      }}
    >
      {children}
    </div>
  )
}
