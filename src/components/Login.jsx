import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../assets/login.webp';
import '../stylesheets/login.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const [User, setUser] = useState({
        Email: "",
        Password: ""
    });
    const [focus, setFocus] = useState({
        Email: false,
        Password: false
    });

    const handleFocus = (field) => {
        setFocus({ ...focus, [field]: true });
    };

    const handleBlur = (field) => {
        setFocus({ ...focus, [field]: false });
    };

    async function validateForm(){
        const emailF = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passF = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]+$/;
        if(User.Email.trim() === '' || User.Password.trim() === '') {
            toast.error('Empty Fields');
        }
        else if(!emailF.test(User.Email)) {
            toast.error('Invalid Email address')
        }
        else if(!passF.test(User.Password)){
            toast.error('Invalid Password');
        }
        else {
            const loginPromise = axios.post('http://localhost:3000/login', JSON.stringify(User), {
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json'
                }
            });
            toast.promise(
                loginPromise, {
                    loading: "Logging in...",
                    success: response => {
                        localStorage.setItem('auth-token', response.data.token);
                        setTimeout(() => {
                            window.location.replace('/');
                        }, 2000);
                        return (response.data.message);
                    },
                    error: error => {
                        console.log(error.response.data);
                        return error.response.data.errors;
                    }
                }
            )
        }
    }
    if(localStorage.getItem('auth-token')) {
        window.location.replace('/');
    }
    return (
        <div className="Login">
            <div className="loginform">
                <div className="loginImg">
                    <img src={LoginImg} alt="please Login" />
                </div>
                <div className="loginInternal">
                    <h1>Sign in</h1>
                    <div className="input-form">
                        <input 
                            value={User.Email} 
                            required 
                            type="email" 
                            id="Email" 
                            name="Email" 
                            onFocus={() => handleFocus('Email')}
                            onBlur={() => handleBlur('Email')}
                            onChange={(e) => setUser({...User, [e.target.getAttribute('name')]: e.target.value})}
                        />
                        <label htmlFor="Email" className={focus.Email || User.Email ? 'focused' : ''}>Email *</label>
                    </div>
                    <div className="input-form">
                        <input 
                            value={User.Password} 
                            required 
                            type="password" 
                            id="Password" 
                            name="Password" 
                            onFocus={() => handleFocus('Password')}
                            onBlur={() => handleBlur('Password')}
                            onChange={(e) => setUser({...User, [e.target.getAttribute('name')]: e.target.value})}
                        />
                        <label htmlFor="Password" className={focus.Password || User.Password ? 'focused' : ''}>Password *</label>
                    </div>
                    <div className="loginButtonForgot">
                        <button onClick={validateForm}>
                            Login
                        </button>
                        <div className="LostPass">
                            <a href="#">Lost your</a>
                            <a href="#">Password?</a>
                        </div>
                    </div>
                    <div className="RegisterBtn">
                        <div>Don't have an Account? <Link to='/register'>Sign up Here</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
