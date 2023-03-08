const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database");

class Games extends Model { };

Games.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parental_guidance: {
    type: DataTypes.INTEGER(2),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
}, {
  sequelize, modelName: 'games'
});

module.exports = Games;