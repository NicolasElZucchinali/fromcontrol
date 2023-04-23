import logo from './logo.svg';
import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import {gapi} from 'gapi-script'
import { useGoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const clientID = "405532619153-fdd53vgtreamje4resjdt4cgcehnj41j.apps.googleusercontent.com";

function App() {

  return (
    <div className="App">

        <GoogleOAuthProvider clientId={clientID} >
          <LoginButton/>
        </GoogleOAuthProvider>
        
    </div>
  );
}

export default App;
