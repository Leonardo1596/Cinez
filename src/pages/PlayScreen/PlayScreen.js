import React, { useEffect, useState } from 'react';
import './PlayScreen.css';
import axios from 'axios';

const PlayScreen = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getMoviePath() {
            const movie = JSON.parse(localStorage.getItem('Movie'));
            const moviePath = movie.path + '/' + movie.file_name;

            // Sending movie path
            function sendPath() {
                let body = {
                    path: moviePath
                }

                let token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                axios.post('http://10.147.17.182:8000/video', body)
                    .then(response => {
                        // console.log(response);
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            sendPath();
        }
        getMoviePath();
    }, [])

    if (isLoading) {
        return <span>Loading...</span>
    }


    return (
        <div className='PlayScreen-page'>
            <div className='container-playScreen'>
                <video id="videoPlayer" draggable="false" controls autoPlay>
                    <source src="http://10.147.17.182:8000/video" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default PlayScreen