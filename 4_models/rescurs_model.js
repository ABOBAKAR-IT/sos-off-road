const sequelize = require('sequelize')
const database = require('../database')
const rescures = database.define("tb_rescures", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: sequelize.STRING,
  age: sequelize.INTEGER,
  car_model: sequelize.STRING,
  car_number: sequelize.STRING,
  equipment: sequelize.STRING,
  location: sequelize.STRING,
  user_name: sequelize.STRING,
  experte_level: sequelize.STRING,
  avalbility: sequelize.BOOLEAN,
  legel_id_doc_1: sequelize.STRING,
  legel_id_doc_2: sequelize.STRING,

})
module.exports = rescures