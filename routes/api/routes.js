var checklist = require('./checklist');
module.exports = function(app){
	return {
		checklist: checklist(app)
	};
};