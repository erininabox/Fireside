import React, { useState } from 'react';
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

  const pageCount = 5;
  const [stage, setStage] = useState(0);
  const [user, setUser]  = useState({
      username: '',
      email: '',
      password: '',
      age: null,
      ageRanges: [],
      description: [],
      whatToOffer: [],
      match: ''
    });

  const history = useHistory();

  async function handleSubmit(){
    try {
      await userService.signup(user);
      props.handleSignUpOrLogin()
      history.push('/dashboard')
    } catch(err){
      console.log(err.message)
    }
  }

  // Lift state from page component and increment page index
  function goToNextPage(data) {
    setUser({
      ...user,
      ...data
    })
    setStage(prev => prev + 1);
  }

  if (stage === pageCount)
    handleSubmit();


  return (
    <div id="form-container" >
      <PageMarker page={stage} />
      {
          stage === 0 ? <FirstPage goToNextPage={goToNextPage} /> :
          stage === 1 ? <SecondPage goToNextPage={goToNextPage} /> :
          stage === 2 ? <ThirdPage goToNextPage={goToNextPage}/> :
          stage === 3 ? <FourthPage goToNextPage={goToNextPage} /> :
          <FifthPage goToNextPage={goToNextPage} />
      }
    </div>
  );
}
