/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import './MemberPage.scss';

export default function LoginPage(props){
    const [members, setMembers] = useState([
        {username:   "Sally",
        email:      "email123@email123.com",
        password:   "12345",
        age:        78,
        ageRanges:  "31-40",
        description: "adventurous, creative"
    }]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/members');
                const data = await response.json();
                setMembers({...data});
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <>
             <h1>Login PAGE</h1>
             <ul>
                <h4>Members:</h4>
                {members.map((member, index) => {
                return (
                    <li key={member._id} className="member">
                        <p>{member.username}</p>
                        <p>{member.age}</p>
                        <p>{member.description}</p>
                        <p>Interested in members {member.ageRanges}</p>
                        <p>Contact {member.username}: {member.email}</p>
                    </li>
                );
                })}
            </ul>
        </>
      );
}
/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
/////////////////////////////////  DEBUGGING PURPOSES ONLY/////////////////////////////////////////
