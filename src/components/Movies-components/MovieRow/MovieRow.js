import React, { useEffect, useState } from 'react';
import './MovieRow.css';
import './responsive.css';
import axios from 'axios';

const MovieRow = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    localStorage.removeItem('Movie');

    function fetchMovies() {
      let token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://10.147.17.182:8000/movies')
        .then(response => {
          // console.log(response.data.movies.results);
          setMovies(response.data.movies.results);
        })
        .catch(error => {
          // console.log(error);
        });
    }
    fetchMovies();
  }, [])

  function handleClickImage(movie) {
    console.log(movie);
    localStorage.setItem('Movie', JSON.stringify(movie));
  }

  function addToList(movie) {
    // console.log(movie);
    let body = {
      email: props.userInfo.email,
      id: movie._id,
      _id: movie._id,
      title: movie.title,
      category: movie.category,
      release_date: movie.release_date,
      path: movie.path,
      file_name: movie.file_name,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview
    };

    axios.post('http://10.147.17.182:8000/add-movie', body)
      .then(response => {
        console.log(response.data);



        // Send userInfo back to server
        function sendUserInfo() {
          axios.post('http://10.147.17.182:8000/profile', { user: response.data.result })
            .then(response => {
              console.log(response);
            })
            .catch((error => {
              console.log(error);
            }));
        }
        sendUserInfo();


      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
    <div className='MovieRow-moviesPage'>
      <div className='container-movieRow'>
        <div className='posters'>
          {movies.map((movie) => (
            <div className='image'>
              <a href='/assistir'><img src={movie.poster_path} className="image-poster" alt="poster" onClick={() => handleClickImage(movie)} draggable={false} /></a>
              <button className='btn-addToList' onClick={() => addToList(movie)}>Adicionar à lista</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow