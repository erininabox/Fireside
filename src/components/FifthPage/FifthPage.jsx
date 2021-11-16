import React, { useState } from 'react';

import './FifthPage.scss';
import CustomButton from '../CustomButton/CustomButton';

const descriptionOptions = [
    [ 'Caring', 'ei_heart.svg' ],
    [ 'Empathetic', 'ion_ear-outline.svg' ],
    [ 'Curious', 'bi_question.svg' ],
    [ 'Thoughtful', 'icon-park-outline_brain.svg' ],
    [ 'Extrovert', 'healthicons_i-groups-perspective-crowd-outline.svg' ],
    [ 'Introvert', 'la_user-friends-1.svg' ],
    [ 'Adventerous', 'icons8_adventures.svg' ],
    [ 'Creative', 'emojione-monotone_artist-palette.svg' ] 
];

export default function FifthPage({ goToNextPage }){

    const [selfDescriptions, setSelfDescriptions] = useState([]);

    // Lift userage state and go to next page
    function handleCustomClick () {
        goToNextPage({ selfDescriptions: selfDescriptions });
    }

    function handleAddRangeClick (e) {
        let temp = descriptionOptions.filter(option => {
            return option[0] === e.target.innerText;
        })
        let temp2 = [...selfDescriptions];
        temp2.push(temp);
        setSelfDescriptions(temp2);
    }

    function handleRemoveRangeClick (e) {
        let temp;

        temp = selfDescriptions.filter(selfD => {
            return !(selfD[0][0] === e.target.innerText);
        })

        setSelfDescriptions([...temp]);
    }

    function checkIfSelected(description) {
        let allSD = JSON.stringify(descriptionOptions);
        let thisSD = JSON.stringify(description);
        let index = allSD.indexOf(thisSD);

        if (index != -1) {
            return true;
        }
        return false;
    }

    return (
        <div id="fifthpage-container">
            <h1>How would you describe yourself?</h1>
            
            <div id="self-description-picker">
                {
                    descriptionOptions.map((option, index) => {
                        return (
                            checkIfSelected(option) 
                                ? <div key={index} className="self-description selected-self-description" onClick={handleRemoveRangeClick}>
                                    <object data={option[1]} width={100} height={100}></object>
                                </div>
                                : <div key={index} className="self-description" onClick={handleAddRangeClick}>
                                    <object data={option[1]} width={100} height={100}></object>
                                </div>
                        )
                    })
                }
            </div>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
        </div>
    )
}