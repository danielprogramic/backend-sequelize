const db = require('../config/db.config.js');
const Mama = db.mama;
const Grandma = db.grandma;

exports.create = (req, res) => {	
	Mama.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
		age: req.body.age,
		grandmaId: req.body.grandmaId,
	}).then(mama => {		
		res.send(mama);
	});
};
 
exports.findAll = (req, res) => {
	Mama.findAll({ include: [Grandma]}).then(users => {
		res.send(JSON.stringify(users))
	});
};
exports.findById = (req, res) => {	
	Mama.findAll({ include: [Grandma], where: {grandmaId:req.params.grandmaId} }).then(mama => {
		res.send(JSON.stringify(mama))
	})
};
 

 
