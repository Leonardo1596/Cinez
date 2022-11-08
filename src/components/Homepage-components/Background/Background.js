import React, { useState } from 'react';
import './Background.css';
import './responsive.css';


const Background = (props) => {
    return (
        <div className='Background-component'>
            <div className='container-background'>
                <img src='http://10.147.17.182:8000/img/background-homepage.jpg' className='background' />
            </div>
        </div>
    )
}

export default Background