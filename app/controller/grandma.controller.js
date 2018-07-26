const db = require('../config/db.config.js');
const Grandma = db.grandma;


// Post a Grandma
exports.create = (req, res) => {	
	// Save to MySQL database
	Grandma.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  age: req.body.age
	}).then(grandma => {		
		// Send created Grandma to client
		res.send(grandma);
	});
};
 
// FETCH all Grandmas
exports.findAll = (req, res) => {
	Grandma.findAll().then(grandmas => {
	  // Send all Grandmas to Client
	  res.send(grandmas);
	});
};

// Find a Grandma by Id
exports.findById = (req, res) => {	
	Grandma.findById(req.params.grandmaId).then(grandma => {
		res.send(grandma);
	})
};
 

