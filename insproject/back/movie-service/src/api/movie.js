module.exports = (app, repository) => {
  const apiKey = '66a26aa32ce4593c4fe0f905d4306b0d';
  const request = require('request');

  app.post('/buscafilme', function (req, res) {
    let title = req.body.title;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }
      else if (title == undefined || title == '') {
        res.json({"rating": [], "id": [], "poster": [], "title":[]});
      }
      else {
        let movieList = JSON.parse(body)
        var listId= new Array();
        var listTitle= new Array();
        var listRating= new Array();
        var listPoster= new Array();
        for (let i = movieList.results.length - 1; i >= 0; i--) {
          let id = movieList.results[i].id;
          let title = movieList.results[i].title;
          let rating = movieList.results[i].vote_average;
          let poster = movieList.results[i].poster_path;
          console.log(id);
          listId.push(id);
          listTitle.push(title);
          listRating.push(rating);
          listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
        }
        res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
      }
    });
  })

  app.get('/playing', function (req, res) {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }
      else {
        let movieList = JSON.parse(body)
        var listId= new Array();
        var listTitle= new Array();
        var listRating= new Array();
        var listPoster= new Array();
        for (let i = movieList.results.length - 1; i >= 0; i--) {
          let id = movieList.results[i].id;
          let title = movieList.results[i].title;
          let rating = movieList.results[i].vote_average;
          let poster = movieList.results[i].poster_path;
          console.log(id);
          listId.push(id);
          listTitle.push(title);
          listRating.push(rating);
          listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
        }
        res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});    
      }
    });
  })

  app.get('/upcoming', function (req, res) {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }else {
        let movieList = JSON.parse(body)
        var listId= new Array();
        var listTitle= new Array();
        var listRating= new Array();
        var listPoster= new Array();
        for (let i = movieList.results.length - 1; i >= 0; i--) {
          let id = movieList.results[i].id;
          let title = movieList.results[i].title;
          let rating = movieList.results[i].vote_average;
          let poster = movieList.results[i].poster_path;
          console.log(id);
          listId.push(id);
          listTitle.push(title);
          listRating.push(rating);
          listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
        }
        res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
      }
    });
  })

  app.get('/discover', function(req, res) {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    request(url, function(err, response, body){
      let genreDic = JSON.parse(body)
      if(genreDic !== undefined){
        const genreList = genreDic.genres
        let genres = new Array();
        for (let i = genreList.length - 1; i >= 0; i--) {
          genres.push(genreList[i].name);
        }
        console.log(genres);
        res.json({"genres": genres});
      }
    });
  })

  app.post('/discover', function (req, res) {
    let genre = req.body.genre;
    console.log("genre vale" + genre);
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    request(url, function(err, response, body){
      let genreDic = JSON.parse(body)
      console.log(genreDic);
      if(genreDic !== undefined){
        const genreList = genreDic.genres
        for (let i = genreList.length - 1; i >= 0; i--) {
          console.log(genreList[i].name.toLowerCase());
          if (genre == genreList[i].name.toLowerCase()){
            console.log("dsadsa");
            const genreId = genreList[i].id;
            let rating = req.body.rating;
            let url2 = `https://api.themoviedb.org/3/discover/movie?api_key=66a26aa32ce4593c4fe0f905d4306b0d&sort_by=popularity.desc&include_adult=
            false&include_video=false&vote_average.gte=${rating}&with_genres=${genreId}`
            console.log(url2);
            console.log("batata");
            request(url2, function(err, response, body){
              if(err){
                res.json(err);
              } else {
                let movieList = JSON.parse(body)
                console.log(movieList);
                var listId= new Array();
                var listTitle= new Array();
                var listRating= new Array();
                var listPoster= new Array();
                for (let i = movieList.results.length - 1; i >= 0; i--) {
                  let id = movieList.results[i].id;
                  let title = movieList.results[i].title;
                  let rating = movieList.results[i].vote_average;
                  let poster = movieList.results[i].poster_path;
                  console.log(id);
                  listId.push(id);
                  listTitle.push(title);
                  listRating.push(rating);
                  listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
                  console.log("entra caralhooo");
                  res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
                }
              }
            })
          }
        }
      }
    });
  })

  app.post('/filmography', function (req, res) {
    let actor = req.body.actor;
    let url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${actor}&include_adult=false`
    request(url, function(err, response, body){
      let actorList = JSON.parse(body)
      console.log(actorList);
      if(actorList.results.length > 0){
        let actor = actorList.results[0];
        console.log(actor);
        let actorId = actor.id;
        console.log(actorId);
        let url2 = `https://api.themoviedb.org/3/discover/movie?api_key=66a26aa32ce4593c4fe0f905d4306b0d&sort_by=popularity.desc&include_adult=false&include_video=false&with_people=${actorId}`
        request(url2, function(err, response, body){
          if(err){
            res.json(err);
          } else {
            let movieList = JSON.parse(body)
            console.log(movieList);
            var listId= new Array();
            var listTitle= new Array();
            var listRating= new Array();
            var listPoster= new Array();
            for (let i = movieList.results.length - 1; i >= 0; i--) {
              let id = movieList.results[i].id;
              let title = movieList.results[i].title;
              let rating = movieList.results[i].vote_average;
              let poster = movieList.results[i].poster_path;
              console.log(id);
              listId.push(id);
              listTitle.push(title);
              listRating.push(rating);
              listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
            }
            res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
          }
        })
      }
    });
  })

  app.post('/similar', function (req, res) {
    let title = req.body.title;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&include_adult=false`
    request(url, function(err, response, body){
      let movieList = JSON.parse(body)
      if(movieList.results.length > 0){
        console.log(movieList.results[0]);
        let movieId = movieList.results[0].id;
        console.log(movieId);
        let url2 = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`
        request(url2, function(err, response, body){
          if(err){
            res.json(err);
          } else {
            let movieList = JSON.parse(body)
            var listId= new Array();
            var listTitle= new Array();
            var listRating= new Array();
            var listPoster= new Array();
            for (let i = movieList.results.length - 1; i >= 0; i--) {
              let id = movieList.results[i].id;
              let title = movieList.results[i].title;
              let rating = movieList.results[i].vote_average;
              let poster = movieList.results[i].poster_path;
              console.log(id);
              listId.push(id);
              listTitle.push(title);
              listRating.push(rating);
              listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
            }
            res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
          }
        })
      }
    });
  })

  app.get('/popular', function (req, res) {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }else {
        let movieList = JSON.parse(body)
        if(movieList == undefined){
          res.render('index', {rating: null, error: 'Error, please try again'});
        } else {
          var listId= new Array();
          var listTitle= new Array();
          var listRating= new Array();
          var listPoster= new Array();
          for (let i = movieList.results.length - 1; i >= 0; i--) {
            let id = movieList.results[i].id;
            let title = movieList.results[i].title;
            let rating = movieList.results[i].vote_average;
            let poster = movieList.results[i].poster_path;
            console.log(id);
            listId.push(id);
            listTitle.push(title);
            listRating.push(rating);
            listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
          }
          res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
        }
      }
    });
  })

  app.get('/trending', function (req, res) {
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }else {
        let movieList = JSON.parse(body)
        var listId= new Array();
        var listTitle= new Array();
        var listRating= new Array();
        var listPoster= new Array();
        for (let i = movieList.results.length - 1; i >= 0; i--) {
          let id = movieList.results[i].id;
          let title = movieList.results[i].title;
          let rating = movieList.results[i].vote_average;
          let poster = movieList.results[i].poster_path;
          console.log(id);
          listId.push(id);
          listTitle.push(title);
          listRating.push(rating);
          listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
        }
        res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
      }
    });
  })

  app.get('/top_rating', function (req, res) {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    request(url, function(err, response, body){
      if(err){
        res.json(err);
      }else {
        let movieList = JSON.parse(body)
        var listId= new Array();
        var listTitle= new Array();
        var listRating= new Array();
        var listPoster= new Array();
        for (let i = movieList.results.length - 1; i >= 0; i--) {
          let id = movieList.results[i].id;
          let title = movieList.results[i].title;
          let rating = movieList.results[i].vote_average;
          let poster = movieList.results[i].poster_path;
          console.log(id);
          listId.push(id);
          listTitle.push(title);
          listRating.push(rating);
          listPoster.push(`http://image.tmdb.org/t/p/w500/${poster}`);
        }
        res.json({"rating": listRating, "id": listId, "poster": listPoster, "title":listTitle});
      }
    });
  })

  app.post('/review', function (req, res) {
    let title = req.body.title;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&include_adult=false`
    request(url, function(err, response, body){
      let movieList = JSON.parse(body)
      if(movieList.results.length > 0){
        console.log(movieList.results[0]);
        let movieId = movieList.results[0].id;
        console.log(movieId);
        let url2 = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        request(url2, function(err, response, body){
          if(err){
            res.json(err);
          } else {
            let movieList = JSON.parse(body)
            var listReview= new Array();
            for (let i = movieList.results.length - 1; i >= 0; i--) {
              let content = movieList.results[i].content;
              listReview.push(content);
            }
            res.json({"review": listReview});
          }
        })
      }
    });
  })

  app.post('/favorite', (req, res, next) => {
    let login = req.body.login;
    let title = req.body.title;
    repository.setFavorite(login, title, (err, msg) => {
      if(err) return res.json(err);
      res.json(msg);
    });
  });

  app.post('/my_favorites', (req, res, next) => {
    let login = req.body.login;
    repository.getUser(login, (err, msg) => {
      if(err) return res.json(err);
      if (msg != undefined || msg != []) {
          res.json(msg);
      }
    });
  });

}