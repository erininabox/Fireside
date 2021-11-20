import React from "react";
import { useHistory } from 'react-router-dom';

import './NoMatches.scss';
import CustomButton from "../CustomButton/CustomButton";

export default function NoMatches (props) {

    const history = useHistory();

    function handleOKClick () {
        history.push('/dashboard');
    }

    return (
        <div id="nomatches-container">
            No matches found.
            <CustomButton handleCustomClick={handleOKClick}>Go To Dashboard</CustomButton>
        </div>
    )
}