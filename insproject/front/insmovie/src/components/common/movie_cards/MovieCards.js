import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

const useStyles = makeStyles({
  card: {
    height: 400,
    width: 400,
  },
  media: {
    height: 260,
  },
});

function MovieCards(props) {
  const classes = useStyles();
  const apiBaseUrl = "http://localhost:3002/";
  const cookies = new Cookies();

  const handleReview = (title) => {
    console.log(title);
    props.history.push("/review/" + title);
  };
  const handleSimilar = (title) => {
    console.log(title);
    props.history.push("/similar/" + title);
  }
  const handleFavorite = (title) => {
    var payload = {
      "login":cookies.get("login"),
      "title": title
    }
    axios.post(apiBaseUrl+'favorite', payload);
};

var movie_cards = [];
for (let movie in props.id) {
  movie_cards.push(<Card className={classes.card} style={{'margin-top': 100}}>
    <CardActionArea onClick={() => handleReview(props.title[movie])}>
    <CardMedia
    className={classes.media}
    image={props.poster[movie]}
    title={props.title[movie]}
    />
    <CardContent >
    <Typography gutterBottom variant="h5" component="h2">
    {props.title[movie]}
    </Typography>
    </CardContent>
    </CardActionArea >
    <CardActions>
    <Button size="small" color="primary">
    Read about it
    </Button>
    <Button size="small" color="primary" onClick={() => handleSimilar(props.title[movie])}>
    Similar
    </Button>

    <p>

    Rating: {props.rating[movie]}
    </p>
    <IconButton onClick={() => handleFavorite(props.title[movie])}>
    <FavoriteIcon />
    </IconButton>

    </CardActions>
    </Card>);
  }
  return (
  <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  >
  {movie_cards}

  </Grid>
  );
}
export default withRouter(MovieCards);