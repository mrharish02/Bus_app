import React from 'react'
import './admin.css'
import {
    Link
} from "react-router-dom";

const Admin = () => {
    return (
        <div className='adminpage'>
            <h1>Admin Page</h1>
            <div className="nav">
                <h3>Hello Admin</h3>
                <button><Link to="/">Logout</Link></button>
            </div>
            <form className='adminform'>
                <h3>Enter bus details</h3>
                <input name='bus_name' type="text" placeholder='Bus Name' />
                <input name='source' type="text" placeholder='Source' />
                <input name='destination' type="text" placeholder='Destination' />
                <input name='no_seats' type="number" placeholder='No. of seats' />
                <input name='No. of days' type="text" placeholder='No. of days' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Admin
