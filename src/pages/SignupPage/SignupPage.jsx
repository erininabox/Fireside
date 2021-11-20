import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import FirstPage from '../../components/FirstPage/FirstPage';
import SecondPage from '../../components/SecondPage/SecondPage';
import ThirdPage from '../../components/ThirdPage/ThirdPage';
import FourthPage from '../../components/FourthPage/FourthPage';
import FifthPage from '../../components/FifthPage/FifthPage';
import MatchSelection from '../../components/MatchSelection/MatchSelection';
import PageMarker from '../../components/PageMarker/PageMaker';
import './SignupPage.scss';


// Dummy data for testing the matches display
const dummyMatches = [
  {
    username: 'Mario',
    email: 'email@gmail.com',
    age: 55,
    description: ["Caring", "Curious", "Adventurous"],
    whatToOffer: ["Life Advice", "Stories", "Pop Culture"]
  },
  {
    username: 'Luigi',
    email: 'email@gmail.com',
    age: 59,
    description: ["Caring", "Introvert", "Curious", "Adventurous"],
    whatToOffer: ["Life Advice", "Stories", "Pop Culture"]
  },
  {
    username: 'Peach',
    email: 'email@gmail.com',
    age: 51,
    description: ["Empathetic", "Caring", "Curious", "Adventurous"],
    whatToOffer: ["Life Advice", "Stories", "Pop Culture"]
  },
  {
    username: 'Toad',
    email: 'email@gmail.com',
    age: 56,
    description: ["Caring", "Curious", "Adventurous"],
    whatToOffer: ["Life Advice", "Stories", "Pop Culture"]
  },

]

export default function SignUpPage(props){

  const pageCount = 5;
  const [stage, setStage] = useState(0);
  const [state, setState]  = useState({
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
      await userService.signup(state);
      props.handleSignUpOrLogin()
      history.push('/dashboard')
    } catch(err){
      console.log(err.message)
    }
  }

  // Lift state from page component and increment page index
  function goToNextPage(data) {
    setState({
      ...state,
      ...data
    })
    setStage(prev => prev + 1);
  }

  useEffect(() => {
    if (stage === pageCount)
      handleSubmit();
  }, [stage])

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
