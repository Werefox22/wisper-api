'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    bio: {
      type: DataTypes.STRING,
      defaultValue: ""
    },
    following: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      defaultValue: []
    },
    followed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
}, {
    sequelize,
    modelName: 'user',
  });
  return user;
};