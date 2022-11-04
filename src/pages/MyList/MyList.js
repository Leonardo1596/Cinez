import React, { useEffect, useState } from 'react';
import './MyList.css';
import NavbarLogged from '../../components/NavbarLogged/NavbarLogged';
import ListMovies from '../../components/MyList-components/ListMovies/ListMovies';
import axios from 'axios';

const MyList = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {

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
    }, [userInfo])

    // console.log(userInfo);

    return (
        <div className='MyList'>
            <NavbarLogged userInfo={userInfo} />
            <ListMovies userInfo={userInfo} />
        </div>
    )
}

export default MyList