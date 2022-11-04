import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import RegisterBox from '../../components/Register-components/RegisterBox/RegisterBox';
import './Register.css';

const Register = () => {
  return (
    <div className='Register'>
        <Navbar />
        <RegisterBox />
    </div>
  )
}

export default Register