import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AdminDashboard(props) {

    const [apiData, setApiData] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/user/allUsers`)
            .then(response => { setApiData(response.data) });
    }, []);

    var usersList = apiData.map(obj => {
        return (
            <tr>
                <td>{obj.userName}</td>
                <td>{obj.firstName}</td>
                <td>{obj.lastName}</td>
                <td>{obj.dob}</td>
                <td>{obj.phone}</td>
                <td>{obj.status}</td>
                <td><button onClick={() => {
                    //console.log(obj.userId);
                    axios.post(`http://localhost:8080/user/validateUser`, obj)
                        .then(response => {
                            alert(response.data.responseMsg);
                            window.location.reload();
                        });
                }}>ValidateUser</button></td>
            </tr>
        );
    });

    return (
        <div id='userListTable' class='main'>
            <div className='logoutBtn'>
                <button onClick={()=> {navigate("/login");}}>Logout</button>
            </div>
            <h3>Registered Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DOB</th>
                        <th>PhoneNumber</th>
                        <th>ValidationStatus</th>
                        <th>ChangeStatus</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        </div>
    )
}
