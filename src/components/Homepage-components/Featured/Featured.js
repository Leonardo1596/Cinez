import React from 'react';
import Background from '../Background/Background';
import './Featured.css';
import './responsive.css';

const Featured = (props) => {
  // console.log(props.movies);
  return (
    <div className='Featured-component'>
      <div className='container-featured'>
        <div className='hero-title'>
          <div className='logo'>
            <h1>CineZ</h1>
          </div>
          <h2>Sua Plataforma de Streaming</h2>
          <h3>Crie agora sua conta gratuitamente e aproveite</h3>
          <div className='button'>
            <a href='/cadastro'><button className='btn btn-warning'>Criar Conta Agora</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured