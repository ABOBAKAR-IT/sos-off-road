const support = require("../4_models/support_model");
module.exports.create = async (body) => {
  try {
    const data = await support.create({
      name: body.name,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async (body) => {
  try {
    let data = await support.update({
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
    let data = await support.findAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (body) => {
  try {
    let data = await support.findOne({
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
    let data = await support.destroy({
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