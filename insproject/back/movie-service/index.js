const dotenv = require('dotenv-safe');
dotenv.config()
const movie = require('./src/api/movie');
const server = require("./src/server/server");
const repository = require("./src/repository/repository");
server.start(movie, repository, (err, app) => {
  console.log("just started");
});