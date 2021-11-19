import React from "react";
import { useHistory } from "react-router";

import './DashboardPage.scss';

export default function DashboardPage ({ user }) {

    const history = useHistory();

    function handleGetMatch () {
        history.push('/matching');
    }

    return (
        <div id="dashboardpage-container">
            <p>{user.username} was successfully created in the database</p>
            <button onClick={handleGetMatch}>Get Match</button>
        </div>
    )
}