'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('grandma', [{
        firstname: "Grandma - 1",
        lastname: "Machado",
        age: 33,
        updatedAt: new Date(),
        createdAt: new Date()
    },
    {
        firstname: "Grandma - 2",
        lastname: "Machado",
        age: 33,
        updatedAt: new Date(),
        createdAt: new Date()
    },
    {
        firstname: "Grandma - 3",
        lastname: "Machado",
        age: 33,
        updatedAt: new Date(),
        createdAt: new Date()
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('grandma', null, {});
  }
};
