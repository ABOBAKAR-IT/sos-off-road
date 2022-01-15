
const path = require("path");
const multer = require("multer");
var cloudinary = require("cloudinary");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
module.exports.upload = multer({
  storage: storage,
});
cloudinary.config({
  cloud_name: "rana-abobakar",
  api_key: "174899194822451",
  api_secret: "Qi7yG4DxZ3AsDtwFn5MaU23yD4I",
  secure: true,
});

module.exports.uploadOnCloudinary = async (file) => {
  let result = await cloudinary.uploader.upload(
    file.path,
    function (error, result) {
      console.log(error);
      // res.send(result)
    }
  );
  console.log(result.secure_url);
  return result.secure_url;
};
