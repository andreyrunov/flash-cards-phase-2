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
   await queryInterface.bulkInsert('Answers', [{
         text: 'Насекомые',
        quest_id: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Бананы',
        quest_id: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Колбаса',
        quest_id: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Нет',
        quest_id: 2,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Да',
        quest_id: 2,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Нет',
        quest_id: 3,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Да',
        quest_id: 3,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Рыба',
        quest_id: 4,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Пряники',
        quest_id: 4,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Фрукты',
        quest_id: 4,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Да',
        quest_id: 5,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Нет',
        quest_id: 5,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: '13',
        quest_id: 6,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: '7',
        quest_id: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: '5',
        quest_id: 6,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Плотоядные',
        quest_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Всеядные',
        quest_id: 7,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Травоядные',
        quest_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Да',
        quest_id: 8,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Нет',
        quest_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Да',
        quest_id: 9,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        text: 'Нет',
        quest_id: 9,
        status: false,
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
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
