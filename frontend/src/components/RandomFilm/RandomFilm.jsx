import './RandomFilm.css'
import { memo } from 'react'
import { Link } from 'react-router-dom'
// import placeholder from "../../assets/Placeholder.svg";
import { BackdropImage } from '../ui/BacdropImage/BackdropImage'
const RandomFilm = memo(function randomFilm({ data, title }) {
  console.log(data)
  return (
    <section className='random'>
      <div className='container'>
        <h3 className='random-title'>{title}</h3>
        <BackdropImage src={data?.backdrop.url}>
          <>
            {/* <div
          style={{
            backgroundImage: `url(${
              data.backdrop.url ? placeholder : data.backdrop.url
            })`,
          }}
          className="random-content" */}
            {/* > */}
            <div className='random-text__block'>
              <div className='random-name__block'>
                <div className='random-rating'>
                  <p className='random-rating__numbers'>
                    {Number.isInteger(data.rating?.imdb) ? data.rating.imdb.toFixed(1) : data.rating.imdb}
                  </p>
                </div>
                <p className='random-name'>{data.name}</p>
              </div>
              <p className='random-description'>{data.shortDescription}</p>
              <div className='random-button__block'>
                <Link to={`/film/${data.id}`}>
                  <button className='random-button hero-watch__button'>Смотреть фильм</button>
                </Link>
              </div>
            </div>
          </>
        </BackdropImage>
      </div>
    </section>
  )
})
export default RandomFilm
