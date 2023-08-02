const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]    //character count for leaving comments must be at least 1.
        }
    },
    user_id: {     //associates the comment with the user via index.js
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
            model: 'user',
            key: 'id' 
        }
    },
    post_id: {    //associates the comment with the post
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'post',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;