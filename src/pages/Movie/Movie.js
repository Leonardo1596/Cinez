import React, { useEffect, useState } from 'react';
import Background from '../../components/Movie-components/Background/Background';
import NavbarLogged from '../../components/NavbarLogged/NavbarLogged';
import MovieInfo from '../../components/Movie-components/MovieInfo/MovieInfo';
import Loading from '../../components/Loading/Loading';
import './Movie.css';
import axios from 'axios';


const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    function getMovie() {
      const retrievedMovie = localStorage.getItem('Movie');
      setMovie(JSON.parse(retrievedMovie));
    }
    getMovie();

    // Get user informations
    function getUserInfo() {
      axios.get('http://10.147.17.182:8000/profile')
        .then(response => {
          // console.log(response.data.userInfo);
          setUserInfo(response.data.userInfo);
        })
        .catch(error => {
          // console.log(error);
        });
    }
    getUserInfo();
  }, [])

  if (!movie) {
    return (
      <div style={{
        backgroundColor: '#020202',
        height: '100vh',
        width: '100vw'
      }}>
        <Loading />
      </div>
    )
  }

  return (
    <div className='Movie'>
      <Background movie={movie} />
      <NavbarLogged userInfo={userInfo} />
      <MovieInfo movie={movie} userInfo={userInfo} />
    </div>
  )
}

export default Movie