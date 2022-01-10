const sequelize=require('sequelize')
const database=require('../database')
const cases=database.define("tb_cases",{
case_status:sequelize.STRING,
description:sequelize.STRING,

})
module.exports=cases