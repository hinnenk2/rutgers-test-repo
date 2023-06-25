const bcrypt = require('bcrypt');   //import bcrypt for password encryption

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');   //sequelize requires connection access using mysql data 

class User extends Model {    
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);  //user table is created upon password confirmation
    }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]  //password length must be at least 6 characters long, server disconnects otherwise
        }
      }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10); //hashs user's pw with salt value of 10
              return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10); //rehashes the pw
                return updatedUserData;
            }
         },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
  );

module.exports = User;