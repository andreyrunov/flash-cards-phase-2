'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Questions', [{
         text: 'Что является основным источником пищи для ночных ястребов?',
        cat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет?  Ночные ястребы тесно связаны с ястребами!',
        cat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет?   Ночные ястребы вьют гнезда.',
        cat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, { 
         text: 'Что является основным источником пищи выдры?',
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Выдры большую часть времени проводят на суше.',
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Сколько существует видов выдр?',
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Являются ли еноты травоядными, плотоядными или всеядными?',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Еноты ведут ночной образ жизни.',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Еноты впадают в спячку.',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
