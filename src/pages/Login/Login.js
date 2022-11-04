import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LoginBox from '../../components/Login-components/LoginBox/LoginBox';
import './Login.css';

const Login = () => {
  return (
    <div className='Login'>
        <Navbar />
        <LoginBox />
    </div>
  )
}

export default Login