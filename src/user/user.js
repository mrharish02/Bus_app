import React from 'react'
import './user.css'
import {
    Link
} from "react-router-dom";

const searchBus = () => {
    const admin = document.querySelector(".userbus");
}

const User = () => {
    return (
        <div className='userbus'>
            <div className="nav">
                <div className="greeting"><h3>Hello User</h3></div>
                <div className="logout">
                    <button><Link to="/">Logout</Link></button>
                </div>
            </div>

            <div className='searchbus'>
                <input type='text' name='source' placeholder='Source City' />
                <input type="text" name='destination' placeholder='Destination City' />
                <button onClick={searchBus}>Search Bus</button>
            </div>

            <div className="buslist">
                <h3>Bus Details</h3>
                <table>
                    <tr>
                        <th>Bus Name</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Distance</th>
                        <th>Fare</th>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                    <tr>
                        <td>Example1</td>
                        <td>Delhi</td>
                        <td>Mumbai</td>
                        <td>4:00AM</td>
                        <td>840 KM</td>
                        <td>Rs 1150</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default User
