'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('kid', [{
      firstname: "Kid 1",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      mamaId: 1,
  },
  {
      firstname: "Kid 2",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      mamaId: 1,
  },
  {
      firstname: "Kid 1",
      lastname: "Machado",
      age: 33,
      updatedAt: new Date(),
      createdAt: new Date(),
      mamaId: 2,
  }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('kid', null, {});

  }
};
