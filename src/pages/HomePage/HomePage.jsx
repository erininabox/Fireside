import React, { useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
// import CustomButton from '../CustomButton/CustomButton';

export default function HomePage(props) {
    return (
       <div>
            <div className="container" style={{ backgroundImage: "url(/fireside.png)" } }>
                <div className="fuzz">
                    <h1 className="homepage-title">FIRESIDE</h1>
                    <h3 className="stupid-inspirational-quote">Making intergenerational connections</h3>
                </div>
                <div className="btn-container">
                    <Link to='/Login' className="link"><button class="btn" >Login</button></Link>
                    <Link to='/onboarding' className="link"><button class="btn" >Sign-Up</button></Link>
                </div>
            </div>
        </div>
    )
}