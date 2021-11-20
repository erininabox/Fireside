import React, { useState } from 'react';

import './FirstPage.scss';
import CustomButton from '../CustomButton/CustomButton';



export default function FirstPage({ goToNextPage }){

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Controlled input handler
    function handleInputChange(e) {
        setUserInfo({ 
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    // Lift userinfo state and go to next page
    function handleCustomClick () {
        if (userInfo.username && userInfo.email && userInfo.password)
            goToNextPage(userInfo);
    }
 
    return (
        <div id="firstpage-container" style={{ backgroundImage: "url(/fireside.png)" }}>
            <h1>FIRESIDE</h1>
            <h2>Signup</h2>
            <div className="input-wrapper">
                <label htmlFor="username">Name</label>
                <input name="username" onChange={handleInputChange} value={userInfo.username} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input name="email" onChange={handleInputChange} value={userInfo.email}  />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input name="password" onChange={handleInputChange} value={userInfo.password}  />
            </div>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
        </div>
    )
}

