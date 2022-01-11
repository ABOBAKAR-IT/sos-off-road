const sequelize=require('sequelize')
const database=require('../database')
const admin=database.define("tb_admins",{
    id:{
        type:sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
name:sequelize.STRING,
})
module.exports=admin