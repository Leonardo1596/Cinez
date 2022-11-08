import React from 'react';
import './NavbarLogged.css';
import './responsive.css';
import { FaFilm } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";


const Navbar = (props) => {

    function logout() {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className='NavbarLogged-component'>
            <div className='container-navbar'>
                <div className='sidebar'>
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><GiHamburgerMenu className='hamburger-icon'/></button>

                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            {/* <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
                            <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close"><AiOutlineClose /></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='links'>
                                <a href="/inicio"><span>Início</span></a>
                                <a href='/filmes'><span>Filmes</span></a>
                                <a href='minha-lista'><span>Minha Lista</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='left-side'>
                    <a href="/"><div className='navbar-brand'>
                        <FaFilm id="film-icon" />
                        <h1>CineZ</h1>
                    </div></a>

                    <div className='links'>
                        <a href="/inicio"><span>Início</span></a>
                        <a href='/filmes'><span>Filmes</span></a>
                        <a href='minha-lista'><span>Minha Lista</span></a>
                    </div>
                </div>

                <div className='right-side'>
                    <div className="dropdown">
                        <a className="image-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='image-profile rounded-circle' src={`http://10.147.17.182:8000/img/avatar/${props.userInfo.avatar}`} width="35" height="35" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item active" href="" onClick={logout}>Logout</a></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar