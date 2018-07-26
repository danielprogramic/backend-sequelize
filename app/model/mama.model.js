module.exports = (sequelize, Sequelize) => {
	const Mama = sequelize.define('mama', {
	  firstname: Sequelize.STRING,
	  lastname: Sequelize.STRING,
	  age: Sequelize.INTEGER,
	});

	return Mama;
}