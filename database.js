const sequelize=require('sequelize')

const database=new sequelize("sosoffroad","root","",{host:"localhost",dialect:"mariadb"})
module.exports=database