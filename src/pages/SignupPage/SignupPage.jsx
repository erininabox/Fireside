import React, { useState } from 'react';
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
const matches = [
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
  {
    username: 'Shyguy',
    email: 'email@gmail.com',
    age: 54,
    description: ["Caring", "Curious", "Adventurous"],
    whatToOffer: ["Life Advice", "Stories", "Pop Culture"]
  }
]

export default function SignUpPage(props){
    
  const [stage, setStage] = useState(0);
  const [matchIndex, setMatchIndex] = useState(0);
  const [error, setError ] = useState('');
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

  async function handleSubmit(){
    try {
      await userService.signup(state);
      props.handleSignUpOrLogin()
      history.push('/') 
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
  
  function selectUser (selectedUser) {
    handleSubmit();
  }

  function skipUser () {
    if (matchIndex < matches.length - 1) {
      setMatchIndex(prev => prev + 1);
    } else {
      setMatchIndex(0);
    }
  }
  
  return (
    <div id="form-container" >
      <PageMarker page={stage} />
      {
          stage === 0 ? <FirstPage goToNextPage={goToNextPage} /> : 
          stage === 1 ? <SecondPage goToNextPage={goToNextPage} /> :
          stage === 2 ? <ThirdPage goToNextPage={goToNextPage}/> :
          stage === 3 ? <FourthPage goToNextPage={goToNextPage} /> :
          stage === 4 ? <FifthPage goToNextPage={goToNextPage} /> :
          <MatchSelection selectUser={selectUser} skipUser={skipUser} match={matches[matchIndex]} /> 
      }
    </div>
  );
}