import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import {gapi} from 'gapi-script'

const clientID = "405532619153-fdd53vgtreamje4resjdt4cgcehnj41j.apps.googleusercontent.com";

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientID,
        scope:""
      })
    };

    gapi.load('client:auth2', start)
  })


  return (
    <div className="App">
      <LoginButton/>
    </div>
  );
}

export default App;
