module.exports = (app, repository) => {
	app.post('/auth', (req, res, next) => {
		let login = req.body.login;
		let password = req.body.password;
		console.log("------");
		console.log(login + password);
		console.log("------");
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
		let security_code = req.body.security_code;
		console.log(req.body);
		repository.registerUser(first_name, last_name, login, email, security_code, password, (err, msg) => {
			if(err) return res.json(err);
			res.json(msg);
		});
	});
	app.post('/forgot_password', (req, res, next) => {
		let login = req.body.login;
		let securityCode = req.body.security_code;
		let password = req.body.password;
		repository.forgotPassword(login, securityCode, (err, user) => {
			if(err) return res.json(err);
			if (user != undefined) {
				repository.resetPassword(login, password, (err, change) => {
					console.log(change);
					res.json({"auth": true});
				});
			}
			else {
				console.log("nao e isso");

				res.json({"auth": false});
			}
		});
	})
	app.get('/getusers', (req, res, next) => {
		repository.getUsers((err, user) => {
			if(err) return next(err);
			listOfUsers = {"login": []};
			for (i in user) {
				console.log(i);
				listOfUsers["login"].push(user[i]["login"]);
			}
			res.json(listOfUsers);
		});
	});

	app.post('/update_account', (req, res, next) => {
		let changedValues = req.body;
		repository.updateAccount(changedValues, (err, user) => {
			if(err) return next(err);
			res.json(user);
		});
	})
}