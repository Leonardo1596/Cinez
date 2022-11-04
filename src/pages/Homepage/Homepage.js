import React, { useEffect, useState } from 'react';
import Featured from '../../components/Homepage-components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import './Homepage.css';
import Background from '../../components/Homepage-components/Background/Background';
import Loading from '../../components/Loading/Loading';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, '1000');

  if (isLoading) {
    return (
      <div style={{
        backgroundColor: '#020202',
        height: '100vh',
        width: '100vw'
      }}>
        <Navbar />
        <Loading />
      </div>
    )
  }

  return (
    
    <div className='Homepage'>
      <Background movies={movies} />
      <Navbar />
      <Featured movies={movies} />
    </div>
  )
}

export default Homepage