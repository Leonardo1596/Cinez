import React, { useEffect, useState } from 'react';
import './MovieInfo.css';
import './responsive.css';
import { FaRegPlayCircle, FaPlusCircle } from 'react-icons/fa'
import Loading from '../../Loading/Loading';
import axios from 'axios';

const MovieInfo = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (props.movie) {
            setIsLoading(false);
        }
    }, [])
    

    function sendMovie() {
        const movie = localStorage.getItem('Movie');
        localStorage.setItem('WatchMovie', movie);
        window.location.href = '/assistir';
    }

    function addToList() {
        // console.log(movie);
        const movie = JSON.parse(localStorage.getItem('Movie'));

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

        let token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.post('http://10.147.17.182:8000/add-movie', body)
            .then(response => {
                // console.log(response.data);

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

    if (isLoading) {
        return <span>loading..</span>
    }


    return (
        <div className='MovieInfo-component'>
            <div className='container-movieInfo'>
                <div className='poster'>
                    <img src={props.movie.poster_path} />
                </div>

                <div className='info'>
                    <div className='title'>
                        <h1>{props.movie.title}</h1>
                    </div>

                    <div className='releaseDate-category'>
                        <span>{props.movie.release_date}</span>
                        <span className='category'>{props.movie.category}</span>
                    </div>

                    <div className='overview'>
                        <span>{props.movie.overview.length > 300 ? props.movie.overview.substring(0, 250) + '...' : props.movie.overview}</span>
                    </div>

                    <div className='buttons'>
                        <a><button className='btn btn-dark' onClick={sendMovie}>
                            <FaRegPlayCircle className='icon play-icon' />
                            Assistir
                        </button></a>
                        <a><button className='btn btn-dark btn-addList' onClick={addToList}>
                            <FaPlusCircle className='icon plus-icon' />
                            Adicionar à lista
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo