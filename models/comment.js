'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate({ post, user }) {
      // belongs to post
      comment.belongsTo(post, {
        foreignKey: "post_id"
      })

      // belongs to user
      comment.belongsTo(user, {
        foreignKey: "user_id"
      })
    }
  }
  comment.init({
    comment_id: {
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
    },
    post_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
}, {
    sequelize,
    modelName: 'comment',
    timestamps: false
  });
  return comment;
};