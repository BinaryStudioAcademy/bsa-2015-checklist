function dbConnectionHandler() {
	var mongoose = require('mongoose');

	var uri = 'mongodb://localhost/intranet-checklist';
	var opts = {
		server: {
			auto_reconnect: true,
			poolSize: 40
		},
		user: 'root'
	}

	mongoose.connect(uri, opts);



	this.connection = mongoose.connection;



}

module.exports = new dbConnectionHandler();