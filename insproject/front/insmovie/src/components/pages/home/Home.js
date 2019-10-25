import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './css/Home.css';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import Cards from '../../common/cards/Cards';
import Grid from '@material-ui/core/Grid'

function Home(props) {
	const [searchBar, setSearchBar] = useState('');
	const [header, setHeader] = useState('');
	const [homeCards, setHomeCards] = useState('');

  const onSubmit = event => {
      props.history.push("/login");
      console.log(props);
  }
	useEffect(() => {
		var a = [];
		var b = [];
		var c = [];
		a.push(<Header />);
		b.push(<Searchbar />);
		c.push(<Cards />);
		setHeader(a);
		setSearchBar(b);
		setHomeCards(c);
	}, []);
	return (
		<div className="Home">
		<Header />
		<div class="page" >
		<MuiThemeProvider>
		<Searchbar />
		<Cards />
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default Home;