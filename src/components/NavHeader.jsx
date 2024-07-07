import React from 'react'
import Header from './Header'
import NavigationBar from './NavigationBar'
import '../stylesheets/navHeader.css';

const NavHeader = () => {
    return (
        <div className="NavHeader">
            <Header/>
            <NavigationBar/>
        </div>
    )
}

export default NavHeader
