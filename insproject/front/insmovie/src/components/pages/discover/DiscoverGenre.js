import './css/Discover.css';
import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import MovieCards from '../../common/movie_cards/MovieCards';
import axios from 'axios';

function DiscoverGenre(props) {
	const [id, setId] = useState('');
	const [poster, setPoster] = useState('');
	const [rating, setRating] = useState('');
	const [title, setTitle] = useState('');
	const apiBaseUrl = "http://localhost:3002/";
	useEffect(() => {
		var payload = {
			'genre': "war"
		}
		const getFilme = async () => {
			await axios.post(apiBaseUrl+'discover', payload)
			.then(function (response) {
				console.log(response.data);
				console.log("batata");
				setId(response.data['id']);
				setPoster(response.data['poster']);
				setRating(response.data['rating']);
				setTitle(response.data['title']);
			})
		}
		getFilme();
	}, []);
	return (
		<div className="Home">
		<Header />
		<div class="page" >
		<MuiThemeProvider>
		<MovieCards id={id} poster={poster} title={title} rating={rating} />
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default DiscoverGenre;