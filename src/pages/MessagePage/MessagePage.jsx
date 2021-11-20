import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './MessagePage.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import userService from '../../utils/userService';

export default function MessagePage ( props ) {

    const [message, setMessage] = useState('');
    const [otherUser, setOtherUser] = useState({ 
        username: 'user'
    });

    const user = userService.getUser();
    const history = useHistory();

    function handleMessageChange (e) {
        setMessage(e.target.value);
    }

    function handleMessageSubmit () {
        console.log(message)
        /////////////////////////
        // Do something else here
        /////////////////////////
    }

    function handleBackClick () {
        history.push('./dashboard');
    }

    async function getOtherUser (match) {
        try {
            let other = await userService.getOne(match)
            setOtherUser(other.user[0]);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getOtherUser(user.match);
    }, [user.match])

    return (
        <div id="messagepage-wrapper">
            <div id="messagepage-container">
                <h1>{`Connect with ${otherUser.username}`}</h1>
                <label htmlFor="message">Type a Message for them.</label>
                <textarea name="message" value={message} onChange={handleMessageChange} rows="15"></textarea>
                <CustomButton handleCustomClick={handleMessageSubmit}>Send</CustomButton>
                <CustomButton handleCustomClick={handleBackClick}>Back</CustomButton>
            </div>
        </div>
    )
}