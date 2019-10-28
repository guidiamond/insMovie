import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from '../login/Login';
import ProfileHeader from '../../common/profile_header/ProfileHeader';

function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = event => {
    var apiBaseUrl = "http://localhost:3002/";
    var payload = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "login": username,
      "security_code": securityCode,
      "password": password
    }
    console.log(payload);
    axios.post(apiBaseUrl+'register', payload);
    props.history.push('/login');

    }
  const handleRegister = event => {
    props.history.push('/login');
  }

  return (
   <div>
   <ProfileHeader />
   <MuiThemeProvider>
   <center>
   <h1>Register</h1>
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
   hintText="Enter your Username"
   floatingLabelText="Username"
   onChange = {event => setUsername(event.target.value)}
   />
   <br/>
   <TextField
   hintText="Enter your Security Code"
   floatingLabelText="Security Code"
   onChange = {event => setSecurityCode(event.target.value)}
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
   <RaisedButton label="Login" primary={true} onClick={handleRegister}/>
   </center>
   </ MuiThemeProvider>
   </div>
   );
}
  export default Register;