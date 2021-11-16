import React, { useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
// import CustomButton from '../CustomButton/CustomButton';

export default function HomePage() {
    return (
       <div>
            <div class="container" style={{ backgroundImage: "url(/fireside.png)" } }>
                <h1 class="title">FIRESIDE</h1>
                <h3 class="stupid-inspirational-quote">Live, Laugh, Love</h3>
                <Link to='/Login'><button class="btn" >Login</button></Link>
                <Link to='/SignUp'><button class="btn" >Sign-Up</button></Link>
                
            </div>
        </div>
    )
}