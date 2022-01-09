const sequelize=require('sequelize')
const database=require('../database')
const support=database.define("tb_supports",{
status:sequelize.STRING,
})
module.exports=support