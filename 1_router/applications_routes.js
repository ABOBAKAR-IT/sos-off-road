const {
    create,
    update,
    findall,
    findone,
    del
} = require('../2_controlar/applications_controlar')
const express = require('express')
const applicationRouter = express.Router()
applicationRouter.post('/create', create)
applicationRouter.post('/update', update)
applicationRouter.get('/findall', findall)
applicationRouter.get('/findone', findone)
applicationRouter.get('/del', del)
module.exports = applicationRouter