import React from 'react';
import './NavbarLogged.css';
import './responsive.css';
import { FaFilm, FaUserAlt, FaUserPlus } from "react-icons/fa";

const Navbar = (props) => {
    return (
        <div className='NavbarLogged-component'>
            <div className='container-navbar'>
                <div className='left-side'>
                    <a href="/"><div className='navbar-brand'>
                        <FaFilm id="film-icon" />
                        <h1>CineZ</h1>
                    </div></a>
                </div>

                <div className='right-side'>
                    <a href="/minha-lista"><span className='my-list'>Minha lista</span></a>
                    <a href="#"><button className='btn btn-user'>
                        <FaUserAlt className='user-icon'/>
                        <span>{props.userInfo.username}</span>
                    </button></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar