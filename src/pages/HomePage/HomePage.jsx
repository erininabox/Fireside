import React from 'react';
import './HomePage.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function HomePage(props) {

    const history = useHistory();

    function handleLoginClick () {
        history.push('/login');
    }

    function handleSignupClick () {
        history.push('/onboarding');
    }

    return (
       <div>
            <div className="container" style={{ backgroundImage: "url(/fireside.png)" } }>
                <div className="fuzz">
                    <h1 className="homepage-title">FIRESIDE</h1>
                    <h3 className="stupid-inspirational-quote">Making intergenerational connections</h3>
                </div>
                <div className="btn-container">
                    <CustomButton handleCustomClick={handleLoginClick}>Login</CustomButton>
                    <CustomButton handleCustomClick={handleSignupClick}>Signup</CustomButton>
                </div>
            </div>
        </div>
    )
}