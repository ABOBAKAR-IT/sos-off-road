const {
    create,
    update,
    findall,
    findone,
    del
} = require("../2_controlar/admin_controlar");
const express = require("express");
const adminRouter = express.Router();
adminRouter.post("/create", create);
adminRouter.post("/update", update);
adminRouter.get("/findall", findall);
adminRouter.get("/findone", findone);
adminRouter.get("/del", del);
module.exports = adminRouter;
