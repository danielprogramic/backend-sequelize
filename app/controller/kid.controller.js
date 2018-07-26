const db = require('../config/db.config.js');
const Kid = db.kid;
const Mama = db.mama;
const Grandma = db.grandma;

exports.create = (req, res) => {	
	Kid.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
		age: req.body.age,
		mamaId: req.body.mamaId,
	}).then(kid => {		
		res.send(kid);
	});
};
 
exports.findAll = (req, res) => {
	Kid.findAll({ 
        include: [{
          model: Mama,
          include:[ {
            model: Grandma,
            hierarchy: true
          }],
          hierarchy: true
        }],
    }).then(users => {
		res.send(JSON.stringify(users))
	});
};

exports.findById = (req, res) => {	
	Kid.findAll({ include: [Mama], where: {mamaId:req.params.mamaId} }).then(kid => {
		res.send(JSON.stringify(kid))
	})
	
};
 