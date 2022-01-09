const sequelize=require('sequelize')
const database=require('../database')
const admin=database.define("tb_admins",{
name:sequelize.STRING,
})
module.exports=admin