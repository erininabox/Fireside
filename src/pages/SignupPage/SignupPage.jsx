import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
// import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import FirstPage from '../../components/FirstPage/FirstPage'
import PageMarker from '../../components/PageMarker/PageMaker';


export default function SignUpPage(props){
    
    const [stage, setStage] = useState(0)
    const [error, setError ] = useState('')
    const [state, setState]  = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        age:null,
        photo:'',
      });

        const history = useHistory();

        function handleChange(e){
            setState({
             ...state,
            [e.target.name]: e.target.value
            })
       }

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

  function goToNextPage() {
    setStage(prev => prev + 1);
  }
  
  return (
        <div id="form-container" >
        <PageMarker page={stage} />
            {
                stage === 0 ? <FirstPage goToNextPage={goToNextPage} /> : 
                stage === 1 ? <FirstPage goToNextPage={goToNextPage} /> :
                stage === 2 ? <FirstPage goToNextPage={goToNextPage}/> :
                stage === 3 ? <FirstPage goToNextPage={goToNextPage} /> :
                stage === 4 ? <FirstPage goToNextPage={goToNextPage} /> :
                <FirstPage goToNextPage={goToNextPage} /> 
            }
        </div>
        
        );
}