import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Movie from './component/Movie';
import './App.css';
import NavBar from './component/NavBar';

function App() {

// 'http://www.omdbapi.com/?i=tt3896198&apikey=7ae9d117&*&page=1'
  const [movies, setmovies] = useState([]); 
  const [selectedOption, setselctedOption] = useState('regular');
  const [searchTerm, setsearchTerm] = useState('');
  // const APIKEY = '7ae9d117'
  const API_KEY = 'a7b40995b1dbac010f0ef0d4acd6f750'
  // CALLING THE APIS WITH SELECT-OPTION CONDITION
  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=2`;
    if (selectedOption === 'regular') {
          apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=2`;
    }    else if (selectedOption === 'popular') {
          apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
        } else if (selectedOption === 'trending') {
          apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
        }else if (selectedOption === 'series') {
          apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
        }
  fetch(apiUrl)
  .then((res) => res.json())
    .then((data) => {
      setmovies(data.results);
      console.log(data)
  })
  
  }, [selectedOption])
  
  // FUNCTIONS FOR THE NAVBAR (SELECT,OVERLAY-OPTIONS,AND SEARCH BAR)
  function handleChange(event) { 
    let inputValue = event.target.value
    setsearchTerm(inputValue)
    console.log(inputValue);
  }
  
function handleOnsubmit(event) {
  event.preventDefault();
  
    fetch(`https://api.themoviedb.org/3/search/multi?&api_key=${API_KEY}&query=${searchTerm}` )
  .then((res) => res.json())
    .then((data) => {
      setmovies(data.results);
      console.log(data.results)
    })
  };

  function movieTypeChange(event) {
    setselctedOption(event.target.value)
  }

  function overlayMoviePick() {
    let apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    fetch(apiUrl)
  .then((res) => res.json())
    .then((data) => {
      setmovies(data.results);
      console.log(data)
  })
  }
  function overlayTrendingPick() {
    let apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
      fetch(apiUrl)
  .then((res) => res.json())
    .then((data) => {
      setmovies(data.results);
      console.log(data)
  })
  }
function overlaySeriesPick(params) {
  let apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
  fetch(apiUrl)
  .then((res) => res.json())
    .then((data) => {
      setmovies(data.results);
      console.log(data)
  })
}

  
  return (
    <div className="App">
      
      <NavBar
        searchTerm={searchTerm}
        setsearchTerm={setsearchTerm}
        handleChange={handleChange}
        handleOnsubmit={handleOnsubmit} 
        selectedOption={selectedOption}
        movieTypeChange={movieTypeChange}
        overlayMoviePick={overlayMoviePick}
        overlayTrendingPick={overlayTrendingPick}
        overlaySeriesPick={overlaySeriesPick}
      />
      
      <div className='all-movies-container'>
         {/* MAPPING THE MOVIE */}
        { movies.map(movie => (
          <Movie
            key={movie.id}
            {...movie} />
          ))}
       
      </div>
      
      <footer>
        CopyRight 2023 Olaniyi Arokoyu.All Rights Reserved.
      </footer>
    </div>
  );
  // const searchApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=7ae9d117&t=';
  // useEffect(() => {
  
  // })
  // `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
  // `http://www.omdbapi.com/?s=${searchTerm}&apikey=${'7ae9d117'?
}

export default App;

