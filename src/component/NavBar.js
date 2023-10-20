import React from 'react'
import { useState } from 'react'

export default function NavBar(props) {
  const [overlay, setoverlay] = useState(false)
  function openOverlay() {
    setoverlay(!overlay)
  }

  return (
    <div>
      {/* OVERLAY CODES */}
      <div className={overlay ? 'overlay-con' : 'overlay-con_active'}>
        <div className='close-btn' onClick={openOverlay}>×</div>
        <div className='overlay-content'>
        <ul>
          <span className='overlay-options' onClick={props.overlayMoviePick}>Movies</span>
          <span className='overlay-options' onClick={props.overlayTrendingPick}>Trending</span>
          <span className='overlay-options' onClick={props.overlaySeriesPick}>Series</span>
          <span className='overlay-options' >Favourites</span>
          </ul>
          </div>
      </div>
    <nav>
        <div className='app-name-con'>
        <div className='open-btn' onClick={openOverlay}>☰</div>
          <h1>Nzmovies</h1>
</div>

<div className='search-input-con'>
<form onSubmit={props.handleOnsubmit}>  
  <input
    type='text'
    className='search-input'
    placeholder='search movies here'
    value={props.searchTerm}
    onChange={props.handleChange} />             
    </form>
</div>

     
<div className='third-part-nav-con'>
<select value={props.selectedOption} className='filter-input' onChange={props.movieTypeChange}>
  <option value="regular">Regular</option>
<option value="popular">Popular Movies</option>
<option value="trending">Trending Movies/TV</option>
<option value="series">Popular TV Series</option>
    </select>
    </div>
      </nav> 
      </div>


  )
}


// add a like icon when clicked will show on the top of the navbar you have liked a movie add to favourites
//a favourite page that shows the movies you clicked on
