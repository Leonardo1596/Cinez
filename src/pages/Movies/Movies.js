import React, { useEffect, useState } from 'react';
import './Movies.css';
import NavbarLogged from '../../components/NavbarLogged/NavbarLogged';
import MovieRow from '../../components/Movies-components/MovieRow/MovieRow';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

const Movies = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    // Get user informations
    function getUserInfo() {
      axios.get('http://10.147.17.182:8000/profile')
        .then(response => {
          // console.log(response.data.userInfo);
          setUserInfo(response.data.userInfo);
          setTimeout(() => {
            setIsLoading(false);
          }, '700');
        })
        .catch(error => {
          // console.log(error);
        });
    }
    getUserInfo();
  }, [])

  if (isLoading) {
    return (
      <div style={{
        backgroundColor: '#020202',
        height: '100vh',
        width: '100vw'
      }}>
        <NavbarLogged userInfo={userInfo} />
        <Loading />
      </div>
    )
  }

  return (
    <div className='Movies'>
      <NavbarLogged userInfo={userInfo} />
      <MovieRow userInfo={userInfo} />
    </div>
  )
}

export default Movies