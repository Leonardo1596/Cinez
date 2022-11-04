import React from 'react';
import { Navigate } from 'react-router-dom';
import './LoginBox.css';
import './responsive.css';
import axios from 'axios';

const LoginBox = () => {
    function login() {
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        let body = {
            email: email,
            password: password
        };

        axios.post('http://10.147.17.182:8000/auth/sign-in', body)
            .then(response => {
                // console.log(response.data);
                if (response.data.message === 'Successfully signed') {
                    const token = response.data.token;
                    localStorage.setItem("token", token);


                    
                    // Saving userInfo on variable
                    const userInfo = response.data.userProfile;


                    // Send userInfo back to server
                    function sendUserInfo() {
                        axios.post('http://10.147.17.182:8000/profile', { user: userInfo })
                            .then(response => {
                                console.log(response);
                            })
                            .catch((error => {
                                console.log(error);
                            }));
                    }
                    sendUserInfo();
                    

                    // Redirect to /filmes
                    window.location.href = '/filmes';
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            login();
        }
    }


    return (
        <div className='LoginBox-component'>
            <div className='container-loginBox'>
                <div className='title'>
                    <h1>Entre na sua conta</h1>
                    <span>Tenha acesso gratuito a todos os filmes</span>
                </div>
                <div className='form'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingInput">Seu email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingPassword">Sua senha</label>
                    </div>
                </div>
                <div className='forgot-password'>
                    <a href='/recuperar-senha'>Esqueci minha senha</a>
                </div>
                <div className='button-login'>
                    <button className='btn btn-primary btn-login' onClick={login} >Entrar</button>
                </div>
                <div className='not-registered'>
                    <a href='/cadastro'>Não é cadastrado ainda? Cadastre-se!</a>
                </div>
            </div>
        </div>
    )
}

export default LoginBox