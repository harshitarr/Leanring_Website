import React from 'react'
import './Navbar.css'
import logo from './logo.png'

const Navbar =() =>{
    return(
        <nav className="nav1">

          <img src={logo} alt="Logo" className="logo" />
            
            <ul>

                <li>Tutorials</li>
                <li>Exercises</li>
                <li>Services</li>
                <li>Certificates</li>

            </ul>

            <div className="signup">
                <ul>
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar