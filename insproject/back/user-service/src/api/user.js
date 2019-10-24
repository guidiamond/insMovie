module.exports = (app, repository) => {
	app.post('/auth', (req, res, next) => {
		let login = req.body.login;
		let password = req.body.password;
		repository.getUser(login, password, (err, user) => {
			if(err) return next(err);
			console.log(user);
			if (user != undefined) {
				res.json({"auth": true});
			}
			else {
				res.json({"auth": false});
			}
		});
	})
	app.post('/register', (req, res, next) => {
		let first_name = req.body.first_name;
		let last_name = req.body.last_name;
		let login = req.body.login;
		let email = req.body.email;
		let password = req.body.password;
		repository.registerUser(first_name, last_name, login, email, password, (err, msg) => {
			if(err) return res.redirect('/getusers');
			res.json(msg);
		});
	});
	app.get('/getusers', (req, res, next) => {
		repository.getUsers((err, user) => {
			if(err) return next(err);
			res.json(user);
		});
	})
}