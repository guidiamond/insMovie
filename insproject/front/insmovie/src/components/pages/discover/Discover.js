import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/Discover.css';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import Cards from '../../common/cards/Cards';
import axios from 'axios';

function Discover(props) {
	const genreJson = {};
	const apiBaseUrl = "http://localhost:3002/";

	var [genres, setGenres] = useState('');
	useEffect(() => {
		const getGenres = async () => {
			await axios.get(apiBaseUrl+'discover')
			.then(function (response) {
				setGenres(response.data['genres']);
			})
		}
		getGenres();

	}, []);

	for (let genre_type in genres){
		genreJson[genres[genre_type]] = genres[genre_type].toLowerCase().replace(" ", "_");
		console.log("eae " + genres[genre_type]);
	}
	return (
		<div className="Home">
		<Header />
		<div class="page" >
		<MuiThemeProvider>
		<Searchbar />
		<Cards card={genreJson} previusPath="/discover/"/>
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default Discover;