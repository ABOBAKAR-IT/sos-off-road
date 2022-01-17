const sequelize = require('sequelize')
const database = require('../database')
const user = database.define("tb_users", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:sequelize.STRING,
  email: sequelize.STRING,
  password: sequelize.STRING,
  type: sequelize.STRING
})
module.exports = user