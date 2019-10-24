import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './Home.css';
import Header from './Header';
import Searchbar from './Searchbar';
import Cards from './Cards';
import Grid from '@material-ui/core/Grid'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state={
			search_bar: [],
			header: [],
			home_cards: [],
			filmes:''
		}
	}
	componentWillMount() {
		var search_bar = [];
		var header = [];
		var home_cards = [];
		header.push(<Header parentContext={this} />);
		search_bar.push(<Searchbar parentContext={this} />);
		// for (var i = 5; i >= 0; i--) {
			home_cards.push(<Cards parentContext={this} />);
		// }
		this.setState({header: header,
			search_bar: search_bar,
			home_cards: home_cards,
			filmes: 'zumbilandia'});
	}
	render() {
		return (
			<div className="Home">
			{this.state.header}
			<div class="page">
			<MuiThemeProvider>
			{this.state.search_bar}

			{this.state.home_cards}
			</MuiThemeProvider>
			</div>
			</div>
			);
		}


	}

	export default Home;