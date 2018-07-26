'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mama', [{
      firstname: "Mama 1",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      grandmaId: 1,
  },
  {
      firstname: "Mama 2",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      grandmaId: 1,
  },
  {
      firstname: "Mama 1",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      grandmaId: 2,
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mama', null, {});
  }
};
