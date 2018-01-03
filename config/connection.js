var mysql = require('mysql');


var connection;

if (process.env.JAWSDB_URL) {
	// Heroku deployment
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// local database
	connection = mysql.createConnection({
		// port default: 3000
		host: 'localhost',
		user: 'root',		  // update
		password: 'admin',  // update
		database: 'burgers_db'
	})
};

// connect to MySql
connection.connect(function(err) {
  if (err) {
    console.error('\n'+ 'Connection error (MySQL): ' + err.stack + '\n');
    return;
  }
  console.log('\n' + 'Connection succesful. Id: ' + connection.threadId + '\n');
});

module.exports = connection;


