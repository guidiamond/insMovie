const mongodb = require("../config/mongodb");

function getUser(login, password, callback) {
	mongodb.connect((err, db) => {
		db.collection("login").findOne({"login": login, "password": password}, callback);
	});
}
function getUsers(callback) {
	mongodb.connect((err, db) => {
		db.collection("login").find().toArray(callback);
	});
}

function registerUser(first_name, last_name, login, email, security_code, password, callback) {
	mongodb.connect((err, db) => {
		db.collection("login").insertOne({"first_name": first_name, "last_name": last_name, "login": login, "email": email, "password": password, "security_code": security_code}, callback);
	});
}
function forgotPassword(login, security_code, callback) {
	mongodb.connect((err, db) => {
		db.collection("login").findOne({"login": login, "security_code": security_code}, callback);
	});
}
function resetPassword(login, new_password, callback) {
	mongodb.connect((err, db) => {
		db.collection("login").updateOne({"login": login},$set: {"password": new_password}, callback);
	});

}
function disconnect(){
	return mongodb.disconnect();
}
module.exports = { getUser, getUsers, disconnect, registerUser, forgotPassword, resetPassword }