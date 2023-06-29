import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

export default function SignupPage(props) {

    const [apiData, setApiData] = useState({ userName: "", firstName: "", lastName: "", dob: "", address: "", phone: "", password: "" });

    let navigate = useNavigate();

    const savedata = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/user/signup', apiData)
            .then(() => {
                alert("User registered successfully, login to continue.");
                navigate("/login");
            })
            .catch((error)=> {console.log(error)});
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setApiData({ ...apiData, [name]: value })

    }

    return (
        <div className='main'>
            <h3>User Registration Page</h3>
            <form method="POST" onSubmit={savedata}>
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
                        <td><label>First Name: </label></td>
                        <td><input type='text' name="firstName" placeholder="Firstname" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z]+$'
                            title='Firstname must contain characters only' /></td>
                    </tr>
                    <tr>
                        <td><label>Last Name: </label></td>
                        <td><input type='text' name="lastName" placeholder="Lastname" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z]+$'
                            title='Lastname must contain characters only' /></td>
                    </tr>
                    <tr>
                        <td><label>DOB: </label></td>
                        <td><input type='date' name="dob" required onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Address: </label></td>
                        <td><textarea rows="3" cols="30" name='address' placeholder='Address' onChange={handleChange}></textarea></td>
                    </tr>
                    <tr>
                        <td><label>Phone No: </label></td>
                        <td><input type='text' name="phone" placeholder="+00 00000 00000" size="12" required
                            onChange={handleChange}
                            pattern='[7-9][0-9]{9}'
                            title='Phone number should be 12 numbers' /></td>
                    </tr>
                    <tr>
                        <td><label>Password: </label></td>
                        <td><input type='password' name="password" placeholder="Password" required
                            onChange={handleChange}
                            pattern='^[a-zA-Z0-9]+$'
                            title='Password should not contain any special characters' /></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>Register</button></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className='textCenter'>
                            <a href="/login">Already an user? Login Here</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}