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
        text: 'Где обыкновенные Ночные Ястребы проводят зиму?',
        cat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет?  Бульбат - другое название обыкновенного ночного ястреба.',
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
        text: 'Верно или нет? Выдры родом из Австралии.',
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Выдры изготавливают и используют инструменты.',
        cat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Какова средняя продолжительность жизни выдры в дикой природе?',
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
      }, {
        text: 'Верно или нет? Еноты могут бегать со скоростью до 25 км в час.',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Еноты любят плавать!',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Свое потомство самка кормит 24 раза в день.',
        cat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Верно или нет? Еноты – отдаленные родственники медведей.',
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
