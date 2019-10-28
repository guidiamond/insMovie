import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import MovieCards from '../../common/movie_cards/MovieCards';
import axios from 'axios';

function Review(props) {
	const [review, setReview] = useState('');
	const [title, setTitle] = useState('');
	const apiBaseUrl = "http://localhost:3002/";

	useEffect(() => {
		var payload = {
			'title': props.match.params.movie
		}
		const getFilme = async () => {
			await axios.post(apiBaseUrl+'review', payload)
			.then(function (response) {
				setReview(response.data['review'][0]);
			})
		}
		getFilme();
	}, []);
	return (
		<div className="Home">
		<Header />
		<center>
		<h1>Review</h1>
		</center>
		<div class="page" >
		<MuiThemeProvider>
		<h3>{review}</h3>
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default Review;