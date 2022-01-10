const sequelize=require('sequelize')

const database=new sequelize("sosoffroad1","root","",{host:"localhost",dialect:"mariadb"})
module.exports=database