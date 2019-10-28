const mongodb = require("../config/mongodb");

function setFavorite(login, title, callback) {
	mongodb.connect((err, db) => {
		db.collection("movie").update({"login": login}, { $push: { movie: title }},{upsert: true}, callback);
	});
}
function getUser(login, callback) {
	mongodb.connect((err, db) => {
		db.collection("movie").findOne({"login": login}, callback);
	});
}
function disconnect(){
	return mongodb.disconnect();
}
module.exports = { setFavorite, getUser }