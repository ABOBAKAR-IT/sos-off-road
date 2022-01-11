const sequelize=require('sequelize')
const database=require('../database')
const support=database.define("tb_supports",{
    id:{
        type:sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
status:sequelize.STRING,
})
module.exports=support