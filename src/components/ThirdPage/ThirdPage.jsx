import React, { useState } from 'react';

import './ThirdPage.scss';
import CustomButton from '../CustomButton/CustomButton';

const ageRange = [
    [ '18-30', 18, 30 ],
    [ '31-40', 31, 40 ],
    [ '41-50', 41, 50 ],
    [ '51-60', 51, 60 ],
    [ '61-70', 61, 70 ],
    [ '71-80', 71, 80 ],
    [ '81-90', 81, 90 ],
    [ '91+', 91, 110 ] 
];

export default function ThirdPage({ goToNextPage }){

    const [ageRanges, setAgeRanges] = useState([]);

    // Lift array of ageRanges and go to next page
    function handleCustomClick () {
        console.log(ageRanges)
        goToNextPage({ ageRanges: ageRanges });
    }

    function handleAddRangeClick (e) {
        let temp = ageRange.filter(range => {
            return range[0] === e.target.innerText;
        })
        let temp2 = [...ageRanges];
        temp2.push(temp);
        setAgeRanges(temp2);
    }

    function handleRemoveRangeClick (e) {
        let temp;

        temp = ageRanges.filter(range => {
            return !(range[0][0] === e.target.innerText);
        })

        setAgeRanges([...temp]);
    }

    function checkIfSelected(range) {
        let allRanges = JSON.stringify(ageRanges);
        let thisRange = JSON.stringify(range);
        let index = allRanges.indexOf(thisRange);
        console.log(index)
        if (index !== -1) {
            return true;
        }
        return false;
    }

    return (
        <div id="thirdpage-container">
            <h1>What Age Group are you looking to make friends in?</h1>
            
            <div id="age-range-picker">
                {
                    ageRange.map((ageR, index) => {
                        return (
                            checkIfSelected(ageR) ? <div key={index} className="age-range selected-range" onClick={handleRemoveRangeClick}>{ageR[0]}</div>
                                : <div key={index} className="age-range" onClick={handleAddRangeClick}>{ageR[0]}</div>
                        )
                    })
                }
            </div>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
        </div>
    )
}