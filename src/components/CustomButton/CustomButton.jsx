import React from 'react';

import './CustomButton.scss';

export default function CustomButton (props) {
    return (
        <button onClick={props.handleCustomClick} className="custombutton-container">
            {props.children}
        </button>
    )
}