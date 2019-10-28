import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/MovieList.css';
import Header from '../../common/header/Header';
import Searchbar from '../../common/searchbar/Searchbar';
import MovieCards from '../../common/movie_cards/MovieCards';
import axios from 'axios';
import Cookies from 'universal-cookie';

function MovieList(props) {

	const [myMovieList, setMyMovieList] = useState('');
	const [otherUsers, setOtherUsers] = useState('');
	const apiBaseUrl = "http://localhost:3002/";
	const cookies = new Cookies();
	useEffect(() => {

		const getFilme = async () => {
			var payload = {
				"login": cookies.get('login')
			}
			await axios.post(apiBaseUrl+'my_favorites', payload)
			.then(function (response) {
				setMyMovieList(response.data['movie']);
			})
		}
		const getUsers = async() => {
			const apiBaseUrl2 = "http://localhost:3005/";

			await axios.get(apiBaseUrl2 + 'getusers')
			.then(function (response) {
				setOtherUsers(response.data['login']);
			})
		}
		getFilme();
		getUsers();
	}, []);

	return (
		<div className="Home">
		<Header />
		<center>
		<h1>Movie List</h1>
		<h2>myMovieList</h2>
		{myMovieList}
		<h1>Other users using the platform</h1>
		<h2>{otherUsers}</h2>
		</center>
		</div>
		);


}

export default MovieList;