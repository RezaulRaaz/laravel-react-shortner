import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Register from '../Register'

function GuestNavbar() {

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    )
}

export default GuestNavbar