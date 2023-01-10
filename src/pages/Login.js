import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const MyComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    axios.post("http://localhost:8800/log", {
        username: username,
        password: password
    }).then((response) => {
            if(response.data=="Success")
                console.log("Login Done");
            else
                console.log("Login Failed");


        }
    );
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <br></br>
                <input type="text" onChange={event =>

                setUsername(event.target.value)}
                />
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" onChange={event =>

                setPassword(event.target.value)}
                />
                <br></br>


                <button type="submit">Login</button>
            </form>



        </div>
    );
};

export default MyComponent;
