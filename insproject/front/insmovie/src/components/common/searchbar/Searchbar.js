import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
	palette: {
		primary: {
			main: "#B31728"
		},
		secondary: {
			main: "#202833"
		}
	},
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: fade(theme.palette.common.black, 0.05),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.1),
		},
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function Searchbar() {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
		<InputBase
		className={classes.input}
		style ={{'color': 'white'}}
		placeholder="Search for your favorite movie"
		inputProps={{ 'aria-label': 'Search for your favorite movie' }}
		/>
		<Divider className={classes.divider} orientation="vertical" />
		<IconButton color="primary" className={classes.iconButton} aria-label="search">
		<SearchIcon />
		</IconButton>
		</Paper>
		);
}
