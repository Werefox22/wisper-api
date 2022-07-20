'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment.init({
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
      type: Sequelize.INTEGER,
      allowNull: false
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
}, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};