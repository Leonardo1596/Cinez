import React, { useState } from 'react';
import './LoginBox.css';
import './responsive.css';
import axios from 'axios';

const LoginBox = () => {
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [error, setError] = useState('');

    // Validate fields
    function validateEmail() {
        const email = document.getElementById('floatingInput').value;

        let valid = true;

        if (!email) {
            setErrorEmail('Preencha este campo');
            valid = false;
        }
        return valid;
    }

    function validatePassword() {
        const password = document.getElementById('floatingPassword').value;

        let valid = true;

        if (!password) {
            setErrorPassword('Preencha este campo');
            valid = false;
        }

        if (password.length < 6 && password.length > 0) {
            setErrorPassword('Senha precisa ter mais de 6 caracteres');
            valid = false;
        }
        return valid;
    }



    function login() {
        if (validateEmail() && validatePassword()) {
            const email = document.getElementById('floatingInput').value;
            const password = document.getElementById('floatingPassword').value;

            let body = {
                email: email,
                password: password
            };

            axios.post('http://10.147.17.182:8000/auth/sign-in', body)
                .then(response => {
                    // console.log(response.data);

                    if (response.data.message === 'User not found') {
                        setError('Usuário não encontrado');
                    }

                    if (response.data.message === 'Password is wrong!') {
                        setError('A senha está incorreta');
                    }

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
        } else {
            console.log('não executou a função login()');
        }


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
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingInput">Seu email</label>
                    </div>

                    <div className='error-email'>
                        <span>{errorEmail}</span>
                    </div>

                    <div className="form-floating mt-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingPassword">Sua senha</label>
                    </div>

                    <div className='error-password'>
                        <span>{errorPassword}</span>
                    </div>

                </div>
                <div className='forgot-password'>
                    <a href='/recuperar-senha'>Esqueci minha senha</a>
                </div>
                <div className='button-login'>
                    <button className='btn btn-primary btn-login' onClick={login} >Entrar</button>
                </div>

                <div className='error mt-2'>
                    <span>{error}</span>
                </div>

                <div className='not-registered'>
                    <a href='/cadastro'>Não é cadastrado ainda? Cadastre-se!</a>
                </div>
            </div>
        </div>
    )
}

export default LoginBox