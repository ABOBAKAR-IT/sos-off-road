const {create,update,findall,findone,del}=require('../2_controlar/sos_controlar')
const express=require('express')
const sosRouter=express.Router()
sosRouter.post('/create',create)
sosRouter.post('/update',update)
sosRouter.get('/findall',findall)
sosRouter.get('/findone',findone)
sosRouter.get('/del',del)
module.exports=sosRouter