'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate({ post, comment, follow }) {
      // has many posts
      user.hasMany(post, {
        foreignKey: "user_id"
      })

      // has many comments
      user.hasMany(comment, {
        foreignKey: "user_id"
      })

      // belongs to many users
      user.belongsToMany(user, {
        foreignKey: "source_id",
        otherKey: "target_id",
        as: "follows",
        through: follow
      })
    }
  }
  user.init({
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      defaultValue: ""
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