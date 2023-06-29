import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {

    const [apiData, setApiData] = useState({ userName: "", password: "" });

    let navigate = useNavigate();

    const validateUser = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/user/login', apiData)
            .then((res) => {
                alert(res.data.responseMsg);
                if(res.data.responseCode == "201") { 
                    navigate("/adminDashboard"); 
                }
                if(res.data.responseCode == "200") { 
                    sessionStorage.setItem("user", JSON.stringify(res.data));
                    navigate("/userDashboard"); 
                }
            })
            .catch((error)=> {console.log(error)});
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setApiData({ ...apiData, [name]: value })

    }

    return (
        <div className='main'>
            <h3>Login Page</h3>
            <form method="POST" onSubmit={validateUser}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Username: </label></td>
                            <td><input type='text' name="userName" placeholder="Username" required
                                onChange={handleChange}
                                pattern='^[a-zA-Z]+$'
                                title='Username must contain characters only' /></td>
                        </tr>
                        <tr>
                            <td><label>Password: </label></td>
                            <td><input type='password' name="password" placeholder="Password" required
                                onChange={handleChange}
                                pattern='^[a-zA-Z0-9]+$'
                                title='Password should not contain any special characters' /></td>
                        </tr>
                        <tr>
                            <td><button type='submit'>Login</button></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className='textCenter'>
                                <a href="/signup">New user? Signup Here</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}