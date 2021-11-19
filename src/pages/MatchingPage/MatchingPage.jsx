import React, { useState, useEffect } from "react";

import './MatchingPage.scss';
import userService from "../../utils/userService";
import MatchSelection from "../../components/MatchSelection/MatchSelection";

const dummy = {
  username: "-",
  age: "-",
  description: [],
  whatToOffer: []
};

export default function MatchingPage ({ user }) {

  const [matchIndex, setMatchIndex] = useState(0);
  const [matchError, setMatchError] = useState('');
  const [matches, setMatches] = useState([]);

  // Go through the array of matches
  function skipUser () {
    if (matchIndex < matches.length - 1) {
      setMatchIndex(prev => prev + 1);
    } else {
      setMatchIndex(0);
    }
  }

  // Add the selected match to the user data
  function selectUser (matchName) {
    let updatedUser = { 
      ...user,
      match: matchName
    }
    console.log('Updated user: ', updatedUser);
  }

  // Retrieve all the users "that match"
  async function getAllUsers () {
    try {
      let data = await userService.getAll();
      console.log(data.users)
      setMatches(data.users);
    } catch (error) {
      setMatchError(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

    return (
      <div>
        {
          matchError ? {matchError} :
          <MatchSelection 
            selectUser={selectUser} 
            skipUser={skipUser} 
            match={ matches ? matches[matchIndex] : dummy }
          />
        }
      </div>
        
    )
}