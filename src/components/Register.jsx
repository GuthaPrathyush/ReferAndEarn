import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterImg from '../assets/signup.webp';
import '../stylesheets/register.css';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [User, setUser] = useState({
        Name: "",
        Email: "",
        Password: ""
    });
    const [focus, setFocus] = useState({
        Name: false,
        Email: false,
        Password: false,
        CPassword: false
    });
    const [CPassword, setCPassword] = useState("");
    const handleFocus = (field) => {
        setFocus({ ...focus, [field]: true });
    };

    const handleBlur = (field) => {
        setFocus({ ...focus, [field]: false });
    };
    function handleChange(e) {
        setUser({...User, [e.target.getAttribute('name')]: e.target.value});
    }
    async function validateForm() {
        const nameF = /^[a-zA-Z\s]+$/;
        const emailF = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passF = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]+$/;
        if(User.Name.trim() === '' || User.Email.trim() === '' || User.Password.trim() === '' || CPassword.trim() === '') {
            toast.error('Empty Fields');
        }
        else if(!nameF.test(User.Name)) {
            toast.error('Invalid Name format, Name should only contain letters');
        }
        else if(!emailF.test(User.Email)) {
            toast.error('Invalid Email address')
        }
        else if(!passF.test(User.Password)){
            toast.error('Invalid Password format, The password should contain atleast one uppercase letter, one lowercase letter, one digit and a special character!', {duration: 5000});
        }
        else if(User.Password != CPassword) {
            toast.error('Confirm Password should be same as entered Password');
        }
        else {
            const registerPromise = axios.post('https://referandearnbackend.onrender.com/register', JSON.stringify(User), {
                headers: {
                    Accept: "application/form-data",
                    'Content-Type': 'application/json'
                }
            });
            toast.promise(
                registerPromise, {
                    loading: "Signing Up...",
                    success: response => {
                        setTimeout(() => {
                            window.scrollTo(0, 0);
                            navigate('/login');
                        }, 2000);
                        return (<p><b>Registration Successfull </b>You are being redirected to login Page</p>);
                    },
                    error: error => {
                        return error.response.data.errors;
                    }
                }
            );
        }
    }
    if(localStorage.getItem('auth-token')) {
        window.location.replace('/');
    }
    return (
        <div className="Register">
            <div className="registerform">
                <div className="registerInternal">
                    <h1>Sign up</h1>
                    <div className="input-form">
                        <input type="text" id="Name" name="Name" required 
                        onFocus={() => handleFocus('Name')}
                        onBlur={() => handleBlur('Name')}
                        onChange={handleChange}/>
                        <label htmlFor="Name" className={focus.Name || User.Name ? 'focused' : ''}>Name *</label>
                    </div>
                    <div className="input-form">
                        <input type="email" id="Email" name="Email" required 
                        onFocus={() => handleFocus('Email')}
                        onBlur={() => handleBlur('Email')}
                        onChange={handleChange}/>
                        <label htmlFor="Email" className={focus.Email || User.Email ? 'focused' : ''}>Email *</label>
                    </div>
                    <div className="input-form">
                        <input type="password" id="Password" name="Password" required 
                        onFocus={() => handleFocus('Password')}
                        onBlur={() => handleBlur('Password')}
                        onChange={handleChange}/>
                        <label htmlFor="Password" className={focus.Password || User.Password ? 'focused' : ''}>Password *</label>
                    </div>
                    <div className="input-form">
                        <input type="password" id="CPassword" name="CPassword" required 
                        onFocus={() => handleFocus('CPassword')}
                        onBlur={() => handleBlur('CPassword')}
                        onChange={(e) => setCPassword(e.target.value)}/>
                        <label htmlFor="CPassword" className={focus.CPassword || CPassword ? 'focused' : ''}>Confirm Password *</label>
                    </div>
                    <div className="registerButtonAlready">
                        <button onClick={validateForm}>
                            Register
                        </button>
                        <div className="AlreadyAccount">
                            <Link to="/login">Already have</Link>
                            <Link to="/login">an Account?</Link>
                        </div>
                    </div>
                </div>
                <div className="registerImg">
                    <img src={RegisterImg} alt="please Register" />
                </div>
            </div>
        </div>
    )
}

export default Register
