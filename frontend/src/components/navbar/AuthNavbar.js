import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AuthUser from '../AuthUser'
import Dashboard from '../Dashboard'

function AuthNavbar() {
    const {token,logOut} = AuthUser();
    const logoutUser=()=>{
        if(token != undefined){
            logOut();
        }
    }
    return (
        <div className='container '>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{cursor:'pointer'}} onClick={logoutUser}>Logout</span>
                        </li>
                    </ul>

                </div>
            </nav>
            <div>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </div>
    )
}

export default AuthNavbar