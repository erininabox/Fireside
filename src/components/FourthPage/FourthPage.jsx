import React, { useState } from 'react';

import './FourthPage.scss';
import CustomButton from '../CustomButton/CustomButton';

const offerOptionsDefined = [
    [ 'Stories', 'ic_outline-auto-stories.svg' ],
    [ 'Life Advice', 'healthicons_medical-advice-outline.svg' ],
    [ 'Recipes', 'clarity_list-line.svg' ],
    [ 'Meetings', 'la_user-friends.svg' ],
    [ 'Gifting Advice', 'ant-design_gift-outlined.svg' ],
    [ 'Tech Help', 'emojione-monotone_mobile-phone.svg' ],
    [ 'Conversation', 'bi_chat.svg' ],
    [ 'Pop Culture', 'mdi_drama-masks.svg' ] 
];

export default function FourthPage({ goToNextPage }){

    const [offerOptions, setOfferOptions] = useState([]);

    // Lift array of just descriptions and go to next page
    function handleCustomClick () {
        let justOptions = offerOptions.map(d => d[0][0]);
    
        goToNextPage({ offerOptions: justOptions });
    }

    function handleAddOfferClick (e) {
        let temp = offerOptionsDefined.filter(option => {
            return option[0] === e.target.innerText;
        })
        let temp2 = [...offerOptions];
        temp2.push(temp);
        setOfferOptions(temp2);
    }

    function handleRemoveOfferClick (e) {
        let temp;

        temp = offerOptions.filter(option => {
            return !(option[0][0] === e.target.innerText);
        })

        setOfferOptions([...temp]);
    }

    function checkIfSelected(option) {
        let allOfferOptions = JSON.stringify(offerOptions);
        let thisOfferOption = JSON.stringify(option);
        let index = allOfferOptions.indexOf(thisOfferOption);

        if (index !== -1) {
            return true;
        }
        return false;
    }

    return (
        <div id="fourth-page-container">
            <h1>What can you offer?</h1>
            
            <div id="offer-picker">
                {
                    offerOptionsDefined.map((option, index) => {
                        return (
                            checkIfSelected(option) 
                                ? <div key={index} className="offer selected-offer" onClick={handleRemoveOfferClick}>
                                    <img src={'icons/' + option[1]} width={45} height={45} alt="Some icon"/>
                                    <p>{option[0]}</p>
                                </div>
                                : <div key={index} className="offer" onClick={handleAddOfferClick}>
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