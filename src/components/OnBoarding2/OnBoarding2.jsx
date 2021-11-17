import React from 'react';

import './OnBoarding2.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function OnBoarding2 ({ handleNextClick }) {

    return (
        <div id="onpage2-container">
            <img src={'images/Happy-Bunch-Chat.svg'} alt="Two women hanging around a rediculously large phone" />
            <h2>Maximize Interaction</h2>
            <h3>Discuss gift ideas or schedule a time to hang out during the holidays</h3>
            <CustomButton handleCustomClick={handleNextClick}>Next</CustomButton>
        </div>
    )
}