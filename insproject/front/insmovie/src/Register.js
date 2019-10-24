import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      login:'',
      email:'',
      password:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:3002/";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
      var payload={
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "login": this.state.login,
        "email": this.state.email,
        "password": this.state.password
      }
      console.log("apertou o botao");
      axios.post(apiBaseUrl+'register', payload, {"Access-Control-Allow-Origin": "*"})
      .then(function (response) {
       console.log(response);
       if(response.data.code === 200){
        //  console.log("registration successfull");
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={self.props.appContext}/>);
        var loginmessage = "Not Registered yet.Go to registration";
        self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
       });
      }
      else{
       console.log("some error ocurred",response.data.code);
     }
   })
      .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    // console.log("props",this.props);
    return (
      <div>
      <MuiThemeProvider>
      <div>
      <AppBar
      title="Register"
      />
      <TextField
      hintText="Enter your First Name"
      floatingLabelText="First Name"
      onChange = {(event,newValue) => this.setState({first_name:newValue})}
      />
      <br/>
      <TextField
      hintText="Enter your Last Name"
      floatingLabelText="Last Name"
      onChange = {(event,newValue) => this.setState({last_name:newValue})}
      />
      <br/>
      <TextField
      hintText="Enter your username"
      floatingLabelText="Login"
      onChange = {(event,newValue) => this.setState({login:newValue})}
      />
      <br/>
      <TextField
      hintText="Enter your Email"
      floatingLabelText="Email"
      onChange = {(event,newValue) => this.setState({email:newValue})}
      />
      <br/>
      <TextField
      type = "password"
      hintText="Enter your Password"
      floatingLabelText="Password"
      onChange = {(event,newValue) => this.setState({password:newValue})}
      />
      <br/>
      <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
      </div>
      </MuiThemeProvider>
      </div>
      );
    }
  }

  const style = {
    margin: 15,
  };

  export default Register;