import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../stylesheets/nav.css';

const NavigationBar = () => {
    const navigate = useNavigate();
    return (
        <div className='NavigationBar'>
            <nav>
                <div className="navContainer">
                    <div className="logoAndCourses">
                        <Link to='/'>
                            <img src={Logo} alt="Accredian" />
                        </Link>
                        <button>
                            Courses <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="loginAndTry">
                        <div className="webNavigation">
                            <p>Resources</p>
                            <p>AboutUs</p>
                        </div>
                        <div className="LoginAndTryContainer">
                            <button className='loginBtn' onClick={localStorage.getItem('auth-token')? () => {localStorage.removeItem('auth-token');window.location.replace('/login')}: () => navigate('/login')}>{localStorage.getItem('auth-token')? "Logout": "Login"}</button>
                            <button>Try for free</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
