import React from 'react';

import './OnBoarding3.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function OnBoarding3 ({ handleNextClick }) {

    return (
        <div id="onpage3-container">
            <div>
                <img src={'images/GuyInPhone.svg'} alt="A man looking at a woman in a ridiculously large phone" />
                <img id="flipped" src={'images/GirlInPhone.svg'} alt="A woman looking at a man in a ridiculously large phone" />
            </div>
            <h2>Share Your Stories</h2>
            <h3>Share stories, advice and wisdom to build closer connections</h3>
            <CustomButton handleCustomClick={handleNextClick}>Get Started</CustomButton>
        </div>
    )
}