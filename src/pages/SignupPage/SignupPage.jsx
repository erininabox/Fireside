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

  const pageCount = 6;
  const [stage, setStage] = useState(0);
  const [matches, setMatches] = useState([]);
  const [matchIndex, setMatchIndex] = useState(0);
  const [error, setError ] = useState('');
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
      history.push('/messaging')
    } catch(err){
      console.log(err.message)
      setError(err.message)
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

  // Go through the array of matches
  function skipUser () {
    // if (matchIndex < dummyMatches.length - 1) {
    if (matchIndex < matches.length - 1) {
      setMatchIndex(prev => prev + 1);
    } else {
      setMatchIndex(0);
    }
  }

  // Retrieve all the users "that match"
  async function getAllUsers () {
    try {
      console.log('users');
      let allUsers = await userService.getAll();
      console.log(allUsers)
      setMatches(allUsers.users);
    } catch (error) {
      console.log(error)
      setMatches(dummyMatches)
    }
  }

  useEffect(() => {
    if (stage === pageCount)
      handleSubmit();
  }, [stage])

  useEffect(() => {
    getAllUsers();
  }, [])

  console.log(matches)
  return (
    <div id="form-container" >
      <PageMarker page={stage} />
      {
          stage === 0 ? <FirstPage goToNextPage={goToNextPage} /> :
          stage === 1 ? <SecondPage goToNextPage={goToNextPage} /> :
          stage === 2 ? <ThirdPage goToNextPage={goToNextPage}/> :
          stage === 3 ? <FourthPage goToNextPage={goToNextPage} /> :
          stage === 4 ? <FifthPage goToNextPage={goToNextPage} /> :

          <MatchSelection
            goToNextPage={goToNextPage}
            skipUser={skipUser}
            // match={ dummyMatches[matchIndex]}
            match={ matches.length != 0 ? matches[matchIndex] : dummyMatches[matchIndex]}
            />
      }
    </div>
  );
}
