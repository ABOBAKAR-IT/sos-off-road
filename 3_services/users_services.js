const users = require("../4_models/users_model");
const {Op}=require('sequelize')

module.exports.create = async (body) => {
  try {
    const data = await users.create({
      name: body.name,
      email:body.email,
      password:body.password
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async (body) => {
  try {
    let data = await users.update(
      { name: body.name },
      { where: { id: body.id } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findall = async (body) => {
  try {
    let data = await users.findAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (body) => {
  try {
    let data = await users.findOne({ where: { id: body.id } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports.del = async (body) => {
  try {
    let data = await users.destroy({ where: { id: body.id } });
    if (data == 0) return "user not delete";
    else return "user delete";
  } catch (error) {
    console.log(error);
  }
};
module.exports.login=async(body)=>{
  try {
    console.log("user");
   let data=await users.findAll({
      where: {
        [Op.and]: [
          { email: body.email },
          { password:body.password }
        ]
      }
    });
    return data
  } catch (error) {
    
  }
}
module.exports.signup=async(body)=>{
  try {
    const data = await users.create({
      name: body.name,
      email:body.email,
      password:body.password
    });
    return data;
  } catch (error) {
      
  }
}