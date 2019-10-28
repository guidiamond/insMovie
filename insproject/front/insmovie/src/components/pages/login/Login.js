import axios from 'axios';
import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Home from '../home/Home';
import ProfileHeader from '../../common/profile_header/ProfileHeader';
import TextField from 'material-ui/TextField';
import Cookies from 'universal-cookie';
var apiBaseUrl = "http://localhost:3005/";
function Login(props){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const cookies = new Cookies();
  const handleClick = event => {
    var apiBaseUrl = "http://localhost:3005/";
    var payload = {
      "login": username,
      "password": password
    }
    axios.post(apiBaseUrl+'auth', payload)
    .then(function (response) {
      if (response.data['auth']) {
        cookies.set('login', username);
        console.log(cookies.get('login'));
        props.history.push('/');
      }
      else {
        alert("Invalid input!");
      }
    });
  }
  const handleRegister = event => {
    props.history.push('/register');
  }
    const handleForgotPassword = event => {
    props.history.push('/forgot_password');
  }
  return (
    <div>
    <ProfileHeader />
    <MuiThemeProvider>
    <center>
    <h1>Login</h1>
    <TextField
    hintText="Enter your Username"
    floatingLabelText="Username"
    onChange = {event => setUsername(event.target.value)}
    />
    <br/>
    <TextField
    hintText="Enter your Password"
    floatingLabelText="Password"
    onChange = {event => setPassword(event.target.value)}
    />
    <br />
    <RaisedButton label="Submit" primary={true} onClick={handleClick}/>
    <br />
    <RaisedButton label="Register" primary={true} onClick={handleRegister}/>
    <RaisedButton label="Forgot Password" primary={true} onClick={handleForgotPassword}/>
    </center>
    </ MuiThemeProvider>
    </div>
    );
}

export default Login;