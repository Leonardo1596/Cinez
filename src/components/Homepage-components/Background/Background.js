import React, { useState } from 'react';
import './Background.css';
import './responsive.css';


const Background = (props) => {
    return (
        <div className='Background-component'>
            <div className='container-background'>
                {/* <img src={props.movies[20].backdrop_path} className="background" /> */}
                <img src='https://image.tmdb.org/t/p/original/6MQmtWk4cFwSDyNvIgoJRBIHUT3.jpg' className="background" />
            </div>
        </div>
    )
}

export default Background