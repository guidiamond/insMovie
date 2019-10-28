import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from '../login/Login';
import Header from '../../common/header/Header';
import Cookies from 'universal-cookie';

function MyAccount(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');
  const cookies = new Cookies();


  const handleClick = event => {
    var apiBaseUrl = "http://localhost:3002/";
    var payload = {};
    payload["login"] = cookies.get('login');
    if (firstName != '') {
      payload["first_name"] = firstName;
    }
    if (lastName != '') {
      payload["last_name"] = lastName;
    }
    if (email != '') {
      payload["email"] = email;
    }
    if (password != '') {
      payload["password"] = password;
    }
    console.log(payload);
    axios.post(apiBaseUrl+'update_account', payload);
    props.history.push('/');

  }

  return (
   <div>
   <Header />
   <MuiThemeProvider>
   <center>
   <h1>Edit My Account</h1>
   <TextField
   hintText="Enter your first name"
   floatingLabelText="First Name"
   onChange = {event => setFirstName(event.target.value)}
   />
   <br/>
   <TextField
   hintText="Enter your last name"
   floatingLabelText="Last Name"
   onChange = {event => setLastName(event.target.value)}
   />
   <br/>
   <TextField
   hintText="Enter your Email"
   floatingLabelText="Email"
   onChange = {event => setEmail(event.target.value)}
   />
   <br/>
   <TextField
   hintText="Enter your Password"
   floatingLabelText="Password"
   onChange = {event => setPassword(event.target.value)}
   />
   <br />
   <RaisedButton label="Submit" primary={true} onClick={handleClick}/>
   </center>
   </ MuiThemeProvider>
   </div>
   );
 }
 export default MyAccount;