const sequelize=require('sequelize')
const database=require('../database')
const cases=database.define("tb_cases",{
    id:{
        type:sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
case_status:sequelize.STRING,
description:sequelize.STRING,

})
module.exports=cases