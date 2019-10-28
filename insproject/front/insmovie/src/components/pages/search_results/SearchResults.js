import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import MovieCards from '../../common/movie_cards/MovieCards';
import axios from 'axios';

function SearchResults(props) {
	const [id, setId] = useState('');
	const [poster, setPoster] = useState('');
	const [rating, setRating] = useState('');
	const [title, setTitle] = useState('');
	const apiBaseUrl = "http://localhost:3002/";

	useEffect(() => {
		var payload = {
			'title': props.match.params.search
		}
		const getFilme = async () => {
			await axios.post(apiBaseUrl+'buscafilme', payload)
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
		<div class="page" >
		<MuiThemeProvider>
		<Searchbar />
		<MovieCards id={id} poster={poster} title={title} rating={rating} />
		</MuiThemeProvider>
		</div>
		</div>
		);


	}

	export default SearchResults;