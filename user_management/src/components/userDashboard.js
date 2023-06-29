import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

export default function UserDashboard() {

    let user = JSON.parse(sessionStorage.getItem("user"));

    let navigate = useNavigate();

    return (
        <div id='userListTable' class='main'>
            <div className='logoutBtn'>
                <button onClick={() => { navigate("/login"); }}>Logout</button>
            </div>
            <h3>User Profile</h3>
            <table>
                <tbody>
                    <tr>
                        <td>UserName</td>
                        <td>{user.userName}</td>
                    </tr>
                    <tr>
                        <td>FirstName</td>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <td>LastName</td>
                        <td>{user.lastName}</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>{user.dob}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Account Status</td>
                        <td>{user.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
