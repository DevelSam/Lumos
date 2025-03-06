import {createPortal} from 'react-dom'
import './PlayerModal.css'
import PropTypes from 'prop-types'
export default function PlayerModal ({id, isOpen, onClose, youtube}){
    
    if(!isOpen){
        return null
    }
    return createPortal(
        <div className="player-background">
        <div className="player-content">
        <button className='player-close' onClick={onClose }>X</button>
        <iframe className='player-iframe' width='1060' height='615' allowFullScreen src={ youtube ? youtube:`https://ddbb.lol/?id=${id}&n=0`}></iframe>
        </div>
        </div>,
    

        document.body)
   
}
PlayerModal.propTypes = {
    id: PropTypes.number,
    isOpen: PropTypes.bool,
    onClose : PropTypes.func,
    youtube : PropTypes.any
}