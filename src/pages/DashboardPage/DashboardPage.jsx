import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import './DashboardPage.scss';
import userService from "../../utils/userService";

export default function DashboardPage ({ handleLogout }) {

  const [matches, setMatches] = useState([]);
  const user = userService.getUser();
  const history = useHistory();

  function handleGetMatch () {
    history.push({
      pathname: '/matching',
      state: { matches }
    });
  }

  function handleGoToMessaging () {
    history.push('/messaging');
  }

  function handleLogoutClick () {
    handleLogout();
    history.push('/');
  }

  // Retrieve all the users "that match"
  async function getAllUsers () {
    try {
      let data = await userService.getAll();
      let filteredUsers = filterUsers(data.users);
      setMatches(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  }

  function filterUsers (others) {
    let filtered = others.filter(other => {
      let isMatch = false
      user.ageRanges.forEach(range => {
        if (other.age >= range.low && other.age <= range.high)
          isMatch =  true;
      });
      return isMatch;
    });
    return filtered;
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
      <div id="dashboardpage-container">
          <p>{user.username} was successfully created in the database</p>
          <p>{user.username} is matched with {user.match}</p>
          <p>There are {matches.length} matches</p>
          <button onClick={handleGetMatch}>Get Match</button>
          <button onClick={handleGoToMessaging}>Messaging</button>
          <button onClick={handleLogoutClick}>Logout</button>
      </div>
  )
}