import React from 'react';
import './App.css';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import ForgotPassword from './components/pages/forgot_password/ForgotPassword';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Upcoming from './components/pages/upcoming/Upcoming';
import MyAccount from './components/pages/my_account/MyAccount';
import TopRated from './components/pages/top_rated/TopRated';
import Similar from './components/pages/similar/Similar';
import Review from './components/pages/review/Review';
import Filmography from './components/pages/filmography/Filmography';
import Trending from './components/pages/trending/Trending';
import NowPlaying from './components/pages/now_playing/NowPlaying';
import Discover from './components/pages/discover/Discover';
import DiscoverGenre from './components/pages/discover/DiscoverGenre';
import SearchResults from './components/pages/search_results/SearchResults';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
function App(props) {
  return (
    <Router>
    <Route exact path="/" component={Home} />
    <Route exact path={'/movie_search/:search'} component={SearchResults} />
    <Route exact path={'/review/:movie'} component={Review} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/forgot_password" component={ForgotPassword}/>
    <Route exact path="/now_playing" component={NowPlaying}/>
    <Route exact path="/upcoming" component={Upcoming}/>
    <Route exact path="/similar/:movie" component={Similar}/>
    <Route exact path="/top_rated" component={TopRated}/>
    <Route exact path="/trending" component={Trending}/>
    <Route exact path="/my_account" component={MyAccount}/>
    <Route exact path="/filmography" component={Filmography}/>
    <Route exact path="/filmography/:search" component={Filmography}/>
    <Route exact path="/discover" component={Discover}/>
    <Route exact path="/discover/:genre" component={DiscoverGenre}/>
    </Router>
    );
}

export default App;