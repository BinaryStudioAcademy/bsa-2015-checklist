var checklistRepository = require('../../repositories/checklist');
module.exports = function (app) {

	// app.get('/api/notification', function(req, res){
	// 	res.render('index');
	// });

	app.post('/api/notification', function(req, res){
		checklistRepository.add(req.body);
		res.send("Success?");
	});

};