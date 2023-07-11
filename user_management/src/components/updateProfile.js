import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

export default function UpdateProfile(props) {

    let user = JSON.parse(sessionStorage.getItem("user"));
    const [apiData, setApiData] = useState({ userId: user.userId, userName: user.userName, firstName: user.firstName, lastName: user.lastName, dob: user.dob, address: user.address, phone: user.phone, password: user.password });

    let navigate = useNavigate();

    const savedata = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/user/update', apiData)
            .then((res) => {
                alert("Profile updated successfully.");
                sessionStorage.setItem("user", JSON.stringify(res.data));
                navigate("/userDashboard");
            })
            .catch((error)=> {console.log(error)});
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setApiData({ ...apiData, [name]: value })

    }

    return (
        <div className='main'>
            <div className='logoutBtn'>
                <button onClick={() => { navigate("/userDashboard"); }}>Back</button>
            </div>
            <h3>Update Your Profile</h3>
            <form method="POST" onSubmit={savedata}>
                <table>
                    <tbody>
                    <tr>
                        <td><label>Username: </label></td>
                        <td><input type='text' name="userName" placeholder="Username" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z]+$'
                            value={apiData.userName}
                            title='Username must contain characters only' /></td>
                    </tr>
                    <tr>
                        <td><label>First Name: </label></td>
                        <td><input type='text' name="firstName" placeholder="Firstname" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z]+$'
                            value={apiData.firstName}
                            title='Firstname must contain characters only' /></td>
                    </tr>
                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input type='text' name="lastName" placeholder="Lastname" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z]+$'
                            value={apiData.lastName}
                            title='Lastname must contain characters only' /></td>
                    </tr>
                    <tr>
                        <td><label>DOB: </label></td>
                        <td><input type='date' name="dob" required onChange={handleChange} value={apiData.dob} /></td>
                    </tr>
                    <tr>
                        <td><label>Address: </label></td>
                        <td><textarea rows="3" cols="30" name='address' placeholder='Address' onChange={handleChange} value={apiData.address}></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Phone No: </label></td>
                        <td><input type='text' name="phone" placeholder="+00 00000 00000" size="12" required
                            onChange={handleChange}
                            value={apiData.phone}
                            pattern='[7-9][0-9]{9}'
                            title='Phone number should be 12 numbers' /></td>
                    </tr>
                    <tr>
                        <td><label>Password: </label></td>
                        <td><input type='password' name="password" placeholder="Password" required
                            onChange={handleChange}
                            value={apiData.password}
                            pattern='^[a-zA-Z0-9]+$'
                            title='Password should not contain any special characters' /></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>Update</button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}