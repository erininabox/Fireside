import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import './DashboardPage.scss';
import userService from "../../utils/userService";

export default function DashboardPage (props) {

  const [matches, setMatches] = useState([]);
  const [user, setUser] = useState(userService.getUser());

  const history = useHistory();

  function handleGetMatch () {
      history.push({
        pathname: '/matching',
        state: { matches }
    });
  }

    // Retrieve all the users "that match"
  async function getAllUsers () {
    try {
      let data = await userService.getAll();
      setMatches(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
      <div id="dashboardpage-container">
          <p>{user.username} was successfully created in the database</p>
          <p>{user.username} is matched with {user.match}</p>
          <button onClick={handleGetMatch}>Get Match</button>
      </div>
  )
}