import React from 'react'
import './login.css'
import {
    Link
} from "react-router-dom";

const switchAdmin = () => {
    const admin = document.querySelector(".admin");
    admin.style.cssText = 'display: flex'
    const login = document.querySelector(".login");
    login.style.cssText = 'display: none'
}

const switchUser = () => {
    const login = document.querySelector(".login");
    login.style.cssText = 'display: flex'
    const admin = document.querySelector(".admin");
    admin.style.cssText = 'display: none'
}


const Login = () => {
    return (
        <div className='main'>
            <div className='admin_user'>
                <button onClick={switchAdmin}>ADMIN</button>
                <button onClick={switchUser}>USER</button>
            </div>
            <div className='login'>
                <form className='loginform'>
                    <h3>User</h3>
                    <input type="text" name='user' placeholder='Username' />
                    <input type="text" name='password' placeholder='Password' />
                    <button><Link to="/user">Login</Link></button>

                </form>
            </div>

            <div className='admin'>
                <form className='loginform'>
                    <h3>Admin</h3>
                    <input type="text" name='user' placeholder='Username' />
                    <input type="text" name='password' placeholder='Password' />
                    <button><Link to="/admin">Login</Link></button>
                </form>
            </div>
        </div>
    )
}

export default Login
