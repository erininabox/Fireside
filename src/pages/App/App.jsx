import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import HomePage from '../HomePage/HomePage';
import OnBoardingPage from '../OnBoardingPage/OnBoardingPage';
import MemberPage from '../MemberPage/MemberPage';  /// debugging /////////////////////////////////////////

function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/members">
             <MemberPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/onboarding">
             <OnBoardingPage />
          </Route>
          <Route exact path="/">
              <HomePage />
          </Route>
          {userService.getUser() ?
            <>
             <Switch>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }

      </Switch>
    </div>
  );
}

export default App;
