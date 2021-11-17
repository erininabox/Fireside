import React from 'react';

import './OnBoarding1.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function OnBoarding1 ({ handleNextClick }) {

    return (
        <div id="onpage1-container">
            <h1>Fireside</h1>
            <img src={'images/Older_Young_Peeps.svg'} alt="Old and yound person hanging out" />
            <h2>Connect Intergenerational</h2>
            <h3>Make genuine connections while bridging generational gaps</h3>
            <CustomButton handleCustomClick={handleNextClick}>Next</CustomButton>
        </div>
    )
}