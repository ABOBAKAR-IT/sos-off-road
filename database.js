const sequelize=require('sequelize')

const database=sequelize("sosoffroad","root","",{host:"localhost",dialect:"mariadb"})
module.exports=database