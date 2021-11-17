import React, { useState, useEffect } from 'react';

import './MessagePage.scss';
import CustomButton from '../../components/CustomButton/CustomButton';
import userService from '../../utils/userService';

export default function MessagePage ({ user }) {

    const [message, setMessage] = useState('');
    const [otherUser, setOtherUser] = useState({ 
        username: 'user'
    });

    function handleMessageChange (e) {
        setMessage(e.target.value);
    }

    function handleMessageSubmit () {
        console.log(message)
        // Do something else here
    }

    async function getOtherUser () {
        try {
            let other = await userService.getOne(user.match)
            setOtherUser(other.user[0]);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getOtherUser();
    }, [])

    return (
        <div id="messagepage-wrapper">
            <div id="messagepage-container">
                <h1>{`Connect with ${otherUser.username}`}</h1>
                <label htmlFor="message">Type a Message for them.</label>
                <textarea name="message" value={message} onChange={handleMessageChange} rows="15" cols="43"></textarea>
                <CustomButton handleCustomClick={handleMessageSubmit}>Send</CustomButton>
            </div>
        </div>
    )
}