var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checklistSchema = new Schema({
	name: String,
	body: String
});
// var tests = new Schema({
// 	name: String,
// 	category: String,
// 	file: String,
// 	isDeleted: bollean
// });

module.exports = mongoose.model('Checklist', checklistSchema);