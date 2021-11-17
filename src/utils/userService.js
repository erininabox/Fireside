import tokenService from './tokenService';

const BASE_URL = '/api/users/';


// NOTE THIS IS configured to send of a multi/part form request
// aka photo 
function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email ot username
    throw new Error('Username or email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // Setting our token in localStorage in our browser
  // then we'll be able to use with every request!
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getOne(username) {
  return fetch(BASE_URL + username, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
};

function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
};


export default {
  signup, 
  logout,
  login,
  getUser,
  getOne,
  getAll
};