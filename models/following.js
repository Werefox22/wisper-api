'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class following extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  following.init({
    follow_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    source_id: {
      type: DataTypes.INTEGER
    },
    target_id: {
      type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'following',
    timestamps: false
  });
  return following;
};