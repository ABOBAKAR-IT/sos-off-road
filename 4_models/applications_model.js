const sequelize = require('sequelize')
const database = require('../database')
const application = database.define("tb_applications", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  application_status: sequelize.STRING,
})
module.exports = application