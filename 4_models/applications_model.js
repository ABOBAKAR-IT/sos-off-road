const sequelize=require('sequelize')
const database=require('../database')
const application=database.define("tb_applications",{
application_status:sequelize.STRING,
})
module.exports=application