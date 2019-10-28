import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { withRouter } from "react-router-dom";


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

function Searchbar(props) {
	const classes = useStyles();
	const [search, setSearch] = useState('');

  const onSubmit = event => {
      props.history.push("/filmography/" + search);
  }

	return (
		<Paper className={classes.root}>
		<InputBase
		className={classes.input}
		style ={{'color': 'white'}}
		placeholder="Search for your favorite movie"
        onChange={event => setSearch(event.target.value)}
		inputProps={{ 'aria-label': 'Search for your favorite movie' }
		}
		/>
		<Divider className={classes.divider} orientation="vertical" />
		<IconButton color="primary" className={classes.iconButton} aria-label="search" onClick={onSubmit}>
		<SearchIcon />
		</IconButton>
		</Paper>
		);
}

export default withRouter(Searchbar);