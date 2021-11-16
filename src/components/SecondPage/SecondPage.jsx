import React, { useState } from 'react';

import './SecondPage.scss';
import CustomButton from '../CustomButton/CustomButton';

const ages = [];

for (let i = 18; i <= 110; i++) {
    ages.push(i);
}

export default function SecondPage({ goToNextPage }){

    const [userAge, setUserAge] = useState(18);

    // Lift userage state and go to next page
    function handleCustomClick () {
        goToNextPage({age: userAge});
    }

    function handleAgeClick (e) {
        setUserAge(e.target.innerText);
    }

    return (
        <div id="secondpage-container">
            <h2>How old are you?</h2>
            <h1>{userAge} years old</h1>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
            <div id="age-picker-overlay"></div>
            <div id="age-picker">
                {
                    ages.map(age => {
                        return (
                            age == userAge ? <div key={age} className="age-choice selected-age">{age}</div>
                                : <div key={age} className="age-choice" onClick={handleAgeClick}>{age}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}