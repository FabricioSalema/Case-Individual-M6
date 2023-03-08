const Sequelize = require("sequelize");

const connection = new Sequelize(
  'case1',
  'root',
  '',
  {
    host: 'db.sqlite',
    dialect: 'sqlite'
  });

module.exports = connection;