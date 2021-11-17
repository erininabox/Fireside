import React, { useState } from 'react';
import { useHistory } from 'react-router';

import './OnBoardingPage.scss';
import OnBoarding1 from '../../components/OnBoarding1/OnBoarding1';
import OnBoarding2 from '../../components/OnBoarding2/OnBoarding2';
import OnBoarding3 from '../../components/OnBoarding3/OnBoarding3';

export default function OnBoardingPage (props) {

    // 3 onboarding pages 0, 1, 2
    const [page, setPage] = useState(0);

    const history = useHistory();

    function handleNextClick () {
        if (page === 2) {
            history.push('./signup')
        } else {
            setPage(prev => prev + 1);
        }
    }

    return (
        <div id="onboarding-container">
            {
                page === 0 ? <OnBoarding1 handleNextClick={handleNextClick} />
                : page === 1 ? <OnBoarding2 handleNextClick={handleNextClick} />
                : <OnBoarding3 handleNextClick={handleNextClick} />
            }
        </div>
    )
}