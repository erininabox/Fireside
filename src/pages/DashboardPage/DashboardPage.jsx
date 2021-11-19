import React from "react";

import './DashboardPage.scss';

export default function DashboardPage ({ user }) {
    return (
        <div id="dashboardpage-container">
            {user.username} was successfully created in the database
        </div>
    )
}