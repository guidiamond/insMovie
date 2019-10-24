import axios from 'axios';
import UploadPage from './UploadPage';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
var apiBaseUrl = "http://localhost:3002/";
class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
      <div>
      <TextField
      hintText="Enter your username"
      floatingLabelText="username"
      onChange={(event,newValue) => this.setState({login:newValue})}
      />
      <br/>
      <TextField
      type="password"
      hintText="Enter your Password"
      floatingLabelText="Password"
      onChange = {(event,newValue) => this.setState({password:newValue})}
      />
      <br/>
      <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
      </div>
      </MuiThemeProvider>
      )
    this.state={
      login:'',
      password:'',
      loginComponent:localloginComponent
    }
  }
  componentWillMount(){
  // console.log("willmount prop values",this.props);
  console.log("in student componentWillMount");
  var localloginComponent=[];
  localloginComponent.push(
    <MuiThemeProvider>
    <div>
    <TextField
    hintText="Enter your College Rollno"
    floatingLabelText="Login"
    onChange = {(event,newValue) => this.setState({login:newValue})}
    />
    <br/>
    <TextField
    type="password"
    hintText="Enter your Password"
    floatingLabelText="Password"
    onChange = {(event,newValue) => this.setState({password:newValue})}
    />
    <br/>
    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
    </div>
    </MuiThemeProvider>
    )
  this.setState({loginComponent:localloginComponent})
}
handleClick(event){
  var self = this;
  var payload={
    "login":this.state.login,
    "password":this.state.password
  }
  axios.post(apiBaseUrl+'auth', payload)
  .then(function (response) {
    if(response.data['auth']){
     var uploadScreen=[];
     uploadScreen.push(<UploadPage appContext={self.props.appContext}/>);
     console.log()
     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen});
   }
   else{
     alert("Username or password not found!");
   }
 })
  .catch(function (error) {
   console.log(error);
 });
}
render() {
  return (
    <div>
    <MuiThemeProvider>
    <AppBar
    title="Login"
    />
    </MuiThemeProvider>
    <MuiThemeProvider>
    <div>
    </div>
    </MuiThemeProvider>
    {this.state.loginComponent}
    </div>
    );
}
}

const style = {
  margin: 15,
};

export default Login;