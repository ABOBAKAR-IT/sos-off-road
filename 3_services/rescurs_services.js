const rescure = require("../4_models/rescurs_model");
module.exports.create = async (body) => {
  try {
    const data = await rescure.create({
      name:body.name,
    age:body.age,
    car_model:body.car_model,
car_number:body.car_number,
equipment:body.equipment,
location:body.location,
user_name:body.user_name,
experte_level:body.experte_level,
avalbility:body.avalbility,
legel_id_doc_1:body.legel_id_doc_1,
legel_id_doc_2:body.legel_id_doc_2,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.update = async (body) => {
  try {
    let data = await rescure.update(
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
    let data = await rescure.findAll();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (body) => {
  try {
    let data = await rescure.findOne({ where: { id: body.id } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports.del = async (body) => {
  try {
    let data = await rescure.destroy({ where: { id: body.id } });
    if (data == 0) return "user not delete";
    else return "user delete";
  } catch (error) {
    console.log(error);
  }
};
