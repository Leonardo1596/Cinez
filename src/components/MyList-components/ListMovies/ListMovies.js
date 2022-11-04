import React, { useEffect, useState } from 'react';
import './ListMovies.css';
import axios from 'axios';

const ListMovies = (props) => {

  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    function getUserInfo() {
      let token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://10.147.17.182:8000/profile')
        .then(response => {
          // console.log(response);
          setuserInfo(response.data.userInfo);
        })
        .catch(error => {
          console.log(error);
        });
    }
    getUserInfo()

  }, [userInfo])

  function handleClickImage(movie) {
    console.log(movie);
    localStorage.setItem('Movie', JSON.stringify(movie));

  }

  function removeList(movie) {
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

    axios.post('http://10.147.17.182:8000/remove-movie', body)
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
    <div className='ListMovies-component'>
      <div className='container-listMovies'>
        <h1>Minha Lista</h1>
        <div className='posters'>
          {userInfo.movies && userInfo.movies.map((movie) => (
            <div className='image'>
              <a href="assistir"><img src={movie.poster_path} className="image-poster" alt="poster" onClick={() => handleClickImage(movie)} draggable={false} /></a>
              <button className='btn-removeList' onClick={() => removeList(movie)}>Remover da lista</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListMovies