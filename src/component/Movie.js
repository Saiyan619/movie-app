import React from 'react'
import { useState } from 'react'

export default function Movie(props) {
  const [modal, setmodal] = useState(false)
  function changeModal() {
    setmodal(!modal)
  }
  return (
    <div>
      {modal && (
        <div className={modal ? "modal-overlay" : 'modal-overlay_active'}>
          <div className={modal ? "modal" : 'modal_active'}>
            <div className='close-modal-btn' onClick={changeModal}>×</div>
              <img src={`https://image.tmdb.org/t/p/w500${props.backdrop_path}`} alt='backdrop pic' className='backdrop-pic' />
            <span className='modal-title-tag'>{props.title || props.name}</span>
            <div>
         <span className='modal-rating-tag'>IMDB rating : {props.vote_average}</span> 
         <span className='overview-tag'><p>{props.overview}</p></span>
          </div>
          </div>
          </div>
      )}
    <div className='movie-card'>
      <div className='movie-image-con'>
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt='movie img' className='movie-img' />
        </div>
        <div className='short-det-con'>
          <div className='short-det'>
        <span className='title-tag'>{props.title || props.name}</span>
            <span className={props.vote_average < 5.0 ? 'rating_bad' : (props.vote_average < 7.5 && props.vote_average > 5.0) ? 'rating_average' : 'rating_good'}>{props.vote_average}</span>
          
       
        </div>
          
          <button className='open-movie-details-btn' onClick={changeModal}>Details</button>
        </div>
      </div>
      </div>
  )
}
// original_title
// release_date
// vote_average
// `https://image.tmdb.org/t/p/w500${props.poster_path}