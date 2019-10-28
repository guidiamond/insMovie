import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/TopRated.css';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import MovieCards from '../../common/movie_cards/MovieCards';
import axios from 'axios';

function TopRated(props) {

	const [id, setId] = useState('');
	const [poster, setPoster] = useState('');
	const [rating, setRating] = useState('');
	const [title, setTitle] = useState('');
	const apiBaseUrl = "http://localhost:3002/";

	useEffect(() => {
		const getFilme = async () => {
			await axios.get(apiBaseUrl+'top_rating')
			.then(function (response) {
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
		<center>
		<h1>Top Rated</h1>
		</center>
		<div class="page" >
		<MuiThemeProvider>
		<MovieCards id={id} poster={poster} title={title} rating={rating} />
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

export default TopRated;