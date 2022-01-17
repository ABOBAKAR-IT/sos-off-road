const admin = require("../4_models/admin_model");
const application = require("../4_models/applications_model");
const user=require('../3_services/users_services')
const rescures=require('../4_models/rescurs_model')
module.exports.create = async (body) => {
  try {
     await admin.create({
      name: body.name,
    });
let data=await user.create(body)
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async (body) => {
  try {
    let data = await admin.update({
      name: body.name
    }, {
      where: {
        id: body.id
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findall = async (body) => {
  try {
    let data = await admin.findAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (body) => {
  try {
    let data = await admin.findOne({
      where: {
        id: body.id
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports.del = async (body) => {
  try {
    let data = await admin.destroy({
      where: {
        id: body.id
      }
    });
    if (data == 0) return "user not delete";
    else return "user delete";
  } catch (error) {
    console.log(error);
  }
};

module.exports.findallapplication = async (body) => {
  try {
    let data = await admin.findAll({
include:[{
  model:application, include: [rescures]
}]
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};