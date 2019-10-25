import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  card: {
    height: 400,
    width: 400

  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  var onSubmit = () => {
     console.log("----");
  }

  const classes = useStyles();
  var home_options = ["Now Playing",
  "Upcoming",
  "Top Rated",
  "Popular",
  "Trending",
  "Filography (actor/actress)",
  "Reviews",
  "Similar",
  "Discover"
  ];
  var teste = []
  for (var option in home_options) {
    teste.push(
      <Grid item>
      <Card className={classes.card} onClick={onSubmit}> 
      <CardActionArea>
      <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="350"
      image="https://i.pinimg.com/originals/f4/c2/6c/f4c26cac708cc7397c010bd1f698399f.png"
      title="Contemplative Reptile"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {home_options[option]}
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      );
  }

  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={3}

    style ={{'margin-top': 15}}
    >
    {teste}

    </Grid>
    );
  }
