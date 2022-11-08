import React from 'react';
import './Background.css';
import './responsive.css';

const Background = (props) => {
  return (
    <div className='Background-component'>
        <div className='container-background'>
            <img src={props.movie.backdrop_path} className="background" />
        </div>
    </div>
  )
}

export default Background