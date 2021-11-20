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
        goToNextPage({ ageRanges: ageRanges[0] });
    }

    function handleAddRangeClick (e) {
        let [temp] = ageRange.filter(range => {
            return range[0] === e.target.innerText;
        })
        let temp2 = [...ageRanges];
        temp2.push({ 
            range: temp[0],
            low: temp[1],
            high: temp[2]
        });
        setAgeRanges(temp2);
    }

    function handleRemoveRangeClick (e) {
        let temp;

        temp = ageRanges.filter(ageR => {
            return !(ageR.range === e.target.innerText);
        })

        setAgeRanges([...temp]);
    }

    function checkIfSelected(range) {
        let isChecked = false;
        ageRanges.forEach(ageR => {
            if (ageR.range === range)
                isChecked = true;
        })
        return isChecked;
    }

    return (
        <div id="thirdpage-container">
            <h1>What Age Group are you looking to make friends in?</h1>
            
            <div id="age-range-picker">
                {
                    ageRange.map((ageR, index) => {
                        return (
                            checkIfSelected(ageR[0]) ? <div key={index} className="age-range selected-range" onClick={handleRemoveRangeClick}>{ageR[0]}</div>
                                : <div key={index} className="age-range" onClick={handleAddRangeClick}>{ageR[0]}</div>
                        )
                    })
                }
            </div>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
        </div>
    )
}