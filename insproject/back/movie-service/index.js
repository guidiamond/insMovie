const dotenv = require('dotenv-safe');
dotenv.config()
const movie = require('./src/api/movie');
const server = require("./src/server/server");
server.start(movie, (err, app) => {
  console.log("just started");
});