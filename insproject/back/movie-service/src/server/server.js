const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bd = require('body-parser')
var server = null;
function start(api, callback){
	const app = express();
	app.use(cors());
	app.use(morgan('dev'));
	app.use(helmet());
	app.use((err, req, res, next) => {
		res.status(500).send('Something went wrong!');
	})
	app.use(bd.json());
	api(app);
	server = app.listen(parseInt(process.env.PORT), () =>
		callback(null, server));
	app.listen(3002, function() {
		console.log("ouvindo a porta 3002!");
	})
}
function stop(){
	if(server) server.close();
	return true;
}
module.exports = { start, stop }