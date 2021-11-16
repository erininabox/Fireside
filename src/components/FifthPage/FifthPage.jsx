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

    // Lift array of just descriptions and go to next page
    function handleCustomClick () {
        let justDescriptions = selfDescriptions.map(d => d[0][0]);
    
        goToNextPage({ selfDescriptions: justDescriptions });
    }

    function handleAddDescriptionClick (e) {
        let temp = descriptionOptions.filter(option => {
            return option[0] === e.target.innerText;
        })
        let temp2 = [...selfDescriptions];
        temp2.push(temp);
        setSelfDescriptions(temp2);
    }

    function handleRemoveDescriptionClick (e) {
        let temp;

        temp = selfDescriptions.filter(selfD => {
            return !(selfD[0][0] === e.target.innerText);
        })

        setSelfDescriptions([...temp]);
    }

    function checkIfSelected(description) {
        let allSD = JSON.stringify(selfDescriptions);
        let thisSD = JSON.stringify(description);
        let index = allSD.indexOf(thisSD);

        if (index !== -1) {
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
                                ? <div key={index} className="self-description selected-self-description" onClick={handleRemoveDescriptionClick}>
                                    <img src={'icons/' + option[1]} width={45} height={45} alt="Some icon"/>
                                    <p>{option[0]}</p>
                                </div>
                                : <div key={index} className="self-description" onClick={handleAddDescriptionClick}>
                                    <img src={'icons/' + option[1]} width={45} height={45} alt="Some icon" />
                                    <p>{option[0]}</p>
                                </div>
                        )
                    })
                }
            </div>
            <CustomButton handleCustomClick={handleCustomClick}>Next</CustomButton>
        </div>
    )
}