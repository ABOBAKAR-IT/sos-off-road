const application = require("../4_models/applications_model");
module.exports.create = async (body) => {
  try {
    const data = await application.create({
      application_status:"working",
      tbRescureId:body.id,
      tbAdminId:"1"
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async (body) => {
  try {
    let data = await application.update({
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
    let data = await application.findAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (body) => {
  try {
    let data = await application.findOne({
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
    let data = await application.destroy({
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