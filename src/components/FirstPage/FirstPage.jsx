import React from 'react';
import './FirstPage.scss'


export default function FirstPage({ goToNextPage }){

    function handleNextPage () {
        goToNextPage();
    }

    return (
        <div>
            <h1>tester</h1>
            <button onClick={handleNextPage}>Next</button>
        </div>
    )
}

