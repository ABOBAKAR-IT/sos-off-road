const sequelize=require('sequelize')
const database=require('../database')
const sos=database.define("tb_soss",{
name:sequelize.STRING,
phone_number:sequelize.STRING,
Description:sequelize.STRING,
location:sequelize.STRING,
picture_of_case:sequelize.STRING
})
module.exports=sos