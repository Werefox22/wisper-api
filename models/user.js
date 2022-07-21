'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ post, comment, following }) {
      // has many posts
      user.hasMany(post, {
        foreignKey: "user_id",
        as: "posts"
      })

      // has many comments
      user.hasMany(comment, {
        foreignKey: "user_id",
        as: "comments"
      })

      // belongs to many users
      user.belongsToMany(user, {
        foreignKey: "source_id",
        as: "follows",
        through: following
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
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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