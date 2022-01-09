const sequelize=require('sequelize')
const database=require('../database')
const rescures=database.define("tb_rescuress",{
name:sequelize.STRING,
age:sequelize.NUMBER,
car_model:sequelize.STRING,
car_number:sequelize.STRING,
equipment:sequelize.STRING,
location:sequelize.STRING,
user_name:sequelize.STRING,
experte_level:sequelize.STRING,
avalbility:sequelize.BOOLEAN,
legel_id_doc:sequelize.ARRAY(sequelize.ENUM)

})
module.exports=rescures