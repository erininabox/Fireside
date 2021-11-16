import React, { useState } from 'react';
import './LoginPage.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory } from "react-router-dom";


export default function LoginPage(props){
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const history = useHistory();

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await userService.login(credentials);
          //setUser(user);
          history.push("/home");
        } catch {
          setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <h1>Login PAGE</h1>
            <div className="auth-body">
                <div className="form-container" onSubmit={handleSubmit}>
                    <form autoComplete="off" >
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                    </form>
                </div>
                <p className="error-message"><br/>{error}</p>
            </div>
        </div>
             
      );
}
