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
    axios.post("http://localhost:9000/login", {
        username: username,
        password: password
    }).then((response) => {
            console.log(response);
            if(response.data.message){
                setIsLoggedin(true);
            }
        }
    );
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" onChange={event =>

                setUsername(event.target.value)}
                />
                <label>Password</label>
                <input type="password" onChange={event =>

                setPassword(event.target.value)}
                />


                <button type="submit">Login</button>
            </form>



        </div>
    );
};

export default MyComponent;
