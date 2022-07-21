'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('followings', {
      follow_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source_id: {
        type: Sequelize.INTEGER
      },
      target_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('followings');
  }
};