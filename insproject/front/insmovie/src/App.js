import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  };
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Home parentContext={this}/>);
    this.setState({
      loginPage:loginPage
    })
  }
 //  if (response.data.code == 200){
 //   console.log("Login successfull");
 //   var uploadScreen=[];
 //   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>);
 //   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen});
 // }
 render() {
  return (
        <Router>
            <Route path="/" component={Home}/>
            <Route path="/login" component={Loginscreen}/>
        </Router>
    );
  }
}
const style = {
  margin: 15,
};
export default App;