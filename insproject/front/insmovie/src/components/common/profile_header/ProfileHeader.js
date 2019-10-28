import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#242e27'}}>
        <Toolbar variant="dense">

          <IconButton
            edge="start"
            className={classes.MovieIcon}
            color="inherit"
            aria-label="open drawer"
          >
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            InsMovie
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
