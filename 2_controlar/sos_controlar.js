const express = require("express");
app = express();
app.use(express.json());
const {
  create,
  update,
  findall,
  findone,
  del,
} = require("../3_services/sos_services");
const { uploadOnCloudinary } = require("./file_upload");
module.exports.create = async (req, res) => {
  try {
    let body = req.body;
    let file = req.files;
    let data1 = await uploadOnCloudinary(file[0]);
    body.picture_of_case_1 = data1;
    if (file[1] != undefined) {
      let data2 = await uploadOnCloudinary(file[1]);
      body.picture_of_case_2 = data2;
    }
    var data = await create(body);
    res.send(data);
  } catch (error) {
    console.log("error: " + error);
  }
};
module.exports.update = async (req, res) => {
  try {
    let data = await update(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports.findall = async (req, res) => {
  try {
    let data = await findall(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports.findone = async (req, res) => {
  try {
    let data = await findone(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports.del = async (req, res) => {
  try {
    let data = await del(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(
//         null,
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//       );
//     },
//   });
//  module.exports.upload = multer({ storage: storage });
