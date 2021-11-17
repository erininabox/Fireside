import React, { useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
// import CustomButton from '../CustomButton/CustomButton';

export default function HomePage() {
    return (
       <div>
            <div class="container" style={{ backgroundImage: "url(/fireside.png)" } }>
                <div class="fuzz">
                    <h1 class="title">FIRESIDE</h1>
                    <h3 class="stupid-inspirational-quote">Making intergenerational connections</h3>
                </div>
                <div class="btn-container">
                    <Link to='/Login' className="link"><button class="btn" >Login</button></Link>
                    <Link to='/SignUp' className="link"><button class="btn" >Sign-Up</button></Link>
                </div>
            </div>
        </div>
    )
}