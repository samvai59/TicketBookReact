import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const MyComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [sex,setSex]=useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        axios.post("http://localhost:8800/signup", {
            username: username,
            password: password,
            age:age,
            sex:sex,
            phone:phone

        }).then((response) => {
                console.log(response.data);

            }
        );
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <br></br>
                <input type="text" onChange={event =>setUsername(event.target.value)}/>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" onChange={event => setPassword(event.target.value)}/>
                <br></br>
                <label>Age</label>
                <br></br>
                <input type="text" onChange={event =>setAge(event.target.value)}/>
                <br></br>
                <label>Sex</label>
                <br></br>
                <input type="text" onChange={event =>setSex(event.target.value)}/>
                <br></br>
                <label>Phone</label>
                <br></br>
                <input type="text" onChange={event => setPhone(event.target.value)}/>
                <br></br>


                <button type="submit">Login</button>
            </form>



        </div>
    );
};
export default MyComponent;