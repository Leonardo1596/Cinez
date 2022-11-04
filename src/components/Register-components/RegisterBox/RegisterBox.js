import React from 'react';
import './RegisterBox.css';
import './responsive.css';
import axios from 'axios';

const RegisterBox = () => {
    function register() {
        const username = document.getElementById('floatingUsername').value;
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;
        const passwordAgain = document.getElementById('floatingPasswordAgain').value;

        let body = {
            username: username,
            email: email,
            password: password
        };

        axios.post('http://10.147.17.182:8000/auth/sign-up', body)
            .then(response => {
                // console.log(response);
                if (response.data.message === 'Successfully registered') {
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



                    window.location.href = '/filmes'
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            register();
        }
    }


    return (
        <div className='RegisterBox-component'>
            <div className='container-registerBox'>
                <div className='title'>
                    <h1>Crie agora sua conta</h1>
                    <span>Tenha acesso gratuito a todos os filmes</span>
                </div>
                <div className='form'>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingUsername" placeholder="username" name="username" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingUsername">Seu usuário</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingInput">Seu email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingPassword">Sua senha</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPasswordAgain" placeholder="Password Again" name="passwordAgain" onKeyUp={handleKeyUp} />
                        <label htmlFor="floatingPasswordAgain">Repita a senha</label>
                    </div>
                </div>
                <div className='terms'>
                    <a>Ao clicar em cadastrar, você estará concordando com os termos de responsabilidade</a>
                </div>
                <div className='button-register'>
                    <button className='btn btn-primary btn-register' onClick={register} >Cadastrar</button>
                </div>
                <div className='already-registered'>
                    <a href='/login'>Já é cadastrado? Entre na sua conta!</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterBox