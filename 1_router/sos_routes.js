const {
    create,
    update,
    findall,
    findone,
    del
} = require('../2_controlar/sos_controlar')
const {
    upload
} = require('../2_controlar/file_upload')
const express = require('express')
const sosRouter = express.Router()
sosRouter.post('/create', upload.array('myFile'), create)
sosRouter.post('/update', update)
sosRouter.get('/findall', findall)
sosRouter.get('/findone', findone)
sosRouter.get('/del', del)
module.exports = sosRouter