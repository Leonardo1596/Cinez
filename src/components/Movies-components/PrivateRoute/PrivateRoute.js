import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import IsLoggedContext from '../../../services/IsLogged';

const PrivateRoute = ({ children }) => {

    const [isLogged, setIsLogged] = useState(IsLoggedContext)
    
    useEffect(() => {
        function fetchMovies() {
            let token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('http://10.147.17.182:8000/movies')
                .then(response => {
                    // console.log(response);
                    setIsLogged(true);
                })
                .catch(error => {
                    // console.log(error);
                    setIsLogged(false);
                });
        }
        fetchMovies();
    }, [])

    return isLogged ? children : <Navigate to="/login" />
}

export default PrivateRoute