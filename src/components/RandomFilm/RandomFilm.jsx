import './RandomFilm.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export default function RandomFilm({data, title}){
    
    console.log(data)
    return(
        <section className="random">
        <div className="container">
            <h3 className='random-title'>{title}</h3>
            
            <div style={{backgroundImage:`url(${data.backdrop.url})`}} className="random-content" >
                <div className="random-text__block">
                <div className="random-name__block">
                    <div className="random-rating">
                        <p className="random-rating__numbers">{ Number.isInteger(data.rating.imdb) ? data.rating.imdb.toFixed(1):data.rating.imdb }</p>
                    </div>
                    <p className="random-name">{data.name}</p>
                </div>
                <p className="random-description">{data.shortDescription}</p>
                <div className="random-button__block">
                    <Link to = {`/film/${data.id}`}>
                    <button className="random-button hero-watch__button">Смотреть фильм</button>
                    </Link>
                </div>
            </div>
            </div>  
        </div>
        </section>
    )
}
RandomFilm.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string

}