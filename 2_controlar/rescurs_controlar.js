const {
    create,
    update,
    findall,
    findone,
    del
} = require("../3_services/rescurs_services");
const user=require('../3_services/users_services')
const {uploadOnCloudinary} = require("./file_upload");
module.exports.create = async (req, res) => {
    try {
        let body = req.body;
        let file = req.files;
        let data1 = await uploadOnCloudinary(file[0]);
        let data2 = await uploadOnCloudinary(file[1]);
        body.legel_id_doc_1 = data1;
        body.legel_id_doc_2 = data2;
        var data = await create(body);
      
      await  user.create(req.body)
        res.send(data);
    } catch (error) {
        console.log(error);
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
