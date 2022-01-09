const sequelize=require('sequelize')
const database=require('../database')
const user=database.define("tb_users",{
email:sequelize.STRING,
password:sequelize.STRING,
type:sequelize.STRING
})
module.exports=user