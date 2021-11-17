import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import FirstPage from '../../components/FirstPage/FirstPage';
import SecondPage from '../../components/SecondPage/SecondPage';
import ThirdPage from '../../components/ThirdPage/ThirdPage';
import FourthPage from '../../components/FourthPage/FourthPage';
import FifthPage from '../../components/FifthPage/FifthPage';
import PageMarker from '../../components/PageMarker/PageMaker';
import './SignupPage.scss';


export default function SignUpPage(props){
    
    const [stage, setStage] = useState(0)
    const [error, setError ] = useState('')
    const [state, setState]  = useState({
        username: '',
        email: '',
        password: '',
        age: null,
        ageRanges: [],
        description: [],
        whatToOffer: []
      });

        const history = useHistory();

  

        async function handleSubmit(e){
            e.preventDefault();

        try {
            await userService.signup(state);
      // setTheUser in our app
            props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
      // with the correct user object from the current token
      // then route to the homepage
            history.push('/') // defined above from react-router-dom
      // after this we can go whereever

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }

    
  }

  function goToNextPage(data) {
    setState({
      ...state,
      ...data
    })
    setStage(prev => prev + 1);
  }
  console.log(state)
  
  return (
        <div id="form-container" >
          <PageMarker page={stage} />
          {
              stage === 0 ? <FirstPage goToNextPage={goToNextPage} /> : 
              stage === 1 ? <SecondPage goToNextPage={goToNextPage} /> :
              stage === 2 ? <ThirdPage goToNextPage={goToNextPage}/> :
              stage === 3 ? <FourthPage goToNextPage={goToNextPage} /> :
              stage === 4 ? <FifthPage goToNextPage={goToNextPage} /> :
              <FirstPage goToNextPage={goToNextPage} /> 
          }
        </div>
        
        );
}