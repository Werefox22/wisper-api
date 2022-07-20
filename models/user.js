'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ post, comment }) {
      // has many posts
      user.hasMany(post, {
        foreignKey: "user_id"
      })

      // has many comments
      user.hasMany(comment, {
        foreignKey: "user_id"
      })
    }
  }
  user.init({
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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
    timestamps: false
  });
  return user;
};