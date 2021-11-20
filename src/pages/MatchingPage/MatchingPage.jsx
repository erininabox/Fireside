import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import './MatchingPage.scss';
import userService from "../../utils/userService";
import MatchSelection from "../../components/MatchSelection/MatchSelection";
import NoMatches from "../../components/NoMatches/NoMatches";

export default function MatchingPage ({ user }) {

  const location = useLocation();

  const [matchIndex, setMatchIndex] = useState(0);
  const [matches, setMatches] = useState(location.state.matches);

  const history = useHistory();

  // Go through the array of matches
  function skipUser () {
    if (matchIndex < matches.length - 1) {
      setMatchIndex(prev => prev + 1);
    } else {
      setMatchIndex(0);
    }
  }

  // Add the selected match to the user data
  async function selectUser ({ match }) {
    let updatedUser = { 
      ...user,
      match
    }

    try {
      await userService.update(updatedUser);
      history.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }

    return (
      <div>
        {
          matches ?
          <MatchSelection 
            selectUser={selectUser} 
            skipUser={skipUser} 
            match={ matches[matchIndex]}
          /> : <NoMatches />
        }
      </div>
        
    )
}