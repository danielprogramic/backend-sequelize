const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo', 'root', 'root' , {
  host: '127.0.0.1',
  port: '6603',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    freezeTableName: true, // Do not change my table names.
}
});

const db = {};


db.grandma = require('../model/grandma.model.js')(sequelize, Sequelize);
db.mama = require('../model/mama.model.js')(sequelize, Sequelize);
db.kid = require('../model/kid.model.js')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.grandma.hasMany(db.mama,{foreignKey: 'grandmaId'})
db.mama.belongsTo(db.grandma, {foreignKey: 'grandmaId'});

db.mama.hasMany(db.kid,{foreignKey: 'mamaId'})
db.kid.belongsTo(db.mama, {foreignKey: 'mamaId'});


module.exports = db;