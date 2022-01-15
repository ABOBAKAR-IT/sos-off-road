const {
    create,
    update,
    findall,
    findone,
    del
} = require("../3_services/applications_services");

module.exports.create = async (req, res) => {
    try {
        let data = await create(req.body);
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
