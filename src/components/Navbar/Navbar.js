import React from 'react';
import './Navbar.css';
import './responsive.css';
import { FaFilm, FaUserAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='Navbar-component'>
            <div className='container-navbar'>
                <div className='left-side'>
                    <a href="/"><div className='navbar-brand'>
                        <FaFilm id="film-icon" />
                        <h1>CineZ</h1>
                    </div></a>
                </div>

                <div className='right-side'>
                    <a href="/login"><button className='btn btn-primary btn-login'>
                        <FaUserAlt className='icon user-icon' />
                        <span>Login</span>
                    </button></a>
                    <a href="/cadastro"><button className='btn btn-primary'>
                        <FaUserPlus className='icon userPlus-icon' />
                        <span>Cadastro</span>
                    </button></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar