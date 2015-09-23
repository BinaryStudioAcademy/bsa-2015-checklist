var Repository = require('../units/Repository');
var Checlist = require('../schemas/checklist');

var ChecklistRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = Checlist;
};

ChecklistRepository.prototype = new Repository();

ChecklistRepository.prototype.findByCriteria = function() {

};

module.exports = new ChecklistRepository();