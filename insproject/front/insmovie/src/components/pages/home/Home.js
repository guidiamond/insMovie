import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/Home.css';
import Header from '../../common/header/Header';
import Cards from '../../common/cards/Cards';

function Home(props) {
  var [card, setCard] = useState({
    "Now Playing": "now_playing",
    "Upcoming": "upcoming",
    "Top Rated": "top_rated",
    "Trending (Today)": "trending",
    "Filmography (actor/actress)": "filmography",
    "Discover": "discover"
  });
	return (
		<div className="Home">
		<Header />
		<center>
		<h1>Home</h1>
		</center>
		<div class="page" >
		<MuiThemeProvider>
		<Cards card={card} previusPath="/" />
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default Home;