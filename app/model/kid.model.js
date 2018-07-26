module.exports = (sequelize, Sequelize) => {
	const Kid = sequelize.define('kid', {
	  firstname: Sequelize.STRING,
	  lastname: Sequelize.STRING,
	  age: Sequelize.INTEGER,
	});

	
	return Kid;
}