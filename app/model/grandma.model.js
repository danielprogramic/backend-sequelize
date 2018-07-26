module.exports = (sequelize, Sequelize) => {
	const Grandma = sequelize.define('grandma', {
	  firstname: Sequelize.STRING,
	  lastname: Sequelize.STRING,
	  age: Sequelize.INTEGER
	});

	// Grandma.hasMany(Mama,{as: 'mamas', foreignKey: 'grandmaId'})
	
	return Grandma;
}