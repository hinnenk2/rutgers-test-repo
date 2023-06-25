const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}   //create post model for user's to add/edit comments

Post.init(
    {
      id: {   //required in index.js for associating each Post with the input Comment.
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        onDelete: 'CASCADE'
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',    //required for associating each Post to its User in index.js
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;