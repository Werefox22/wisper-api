'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate({ user, comment }) {
      // belongs to user
      post.belongsTo(user, {
        foreignKey: "user_id",
        as: "user"
      })

      // has many comments
      post.hasMany(comment, {
        foreignKey: "comment_id",
        as: "comments"
      })
    }
  }
  post.init({
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    shares: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tags: {
      type: DataTypes.STRING
    },
    edited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    },
    user_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'post',
    timestamps: false
  });
  return post;
};