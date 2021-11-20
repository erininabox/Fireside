import React, { useState } from 'react';
import './LoginPage.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory } from "react-router-dom";
import CustomButton from '../../components/CustomButton/CustomButton';


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

    async function handleSubmit() {
        try {
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await userService.login(credentials);
          props.handleSignUpOrLogin();
          history.push("/dashboard");
        } catch {
          setError('Log In Failed - Try Again');
        }
    }

    return (
        <div id="login-container">
            <h1>Login Page</h1>
            <div className="form-container">
                <form autoComplete="off" className="form-elements">
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} type="email" required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} type="password" required />
                </form>
            </div>
            <CustomButton handleCustomClick={handleSubmit}>Login</CustomButton>
            <p className="error-message"><br/>{error}</p>
        </div>
             
      );
}
