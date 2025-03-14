import { useEffect, useState } from 'react'
import placeholder from '../assets/Placeholder.svg'
import PropTypes from 'prop-types'
export const BackdropImage = ({ src, children }) => {
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
      className={`random-content ${loaded ? 'loaded' : ''}`}
      style={{
        backgroundImage: `url(${loaded ? src : placeholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  )
}
BackdropImage.propTypes = {
  src: PropTypes.string,
  children: PropTypes.any,
}
