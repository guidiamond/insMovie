const dotenv = require('dotenv-safe');
dotenv.config()
const user = require('./api/user');
const server = require("./server/server");
const repository = require("./repository/repository");
server.start(user, repository, (err, app) => {
	console.log("just started");
});