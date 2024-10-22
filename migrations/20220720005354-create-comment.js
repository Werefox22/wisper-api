'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      shares: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      edited: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
      },
      user_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      post_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};