const {create,update,findall,findone,del}=require('../2_controlar/support_controlar')
const express=require('express')
const supportRouter=express.Router()
supportRouter.post('/create',create)
supportRouter.post('/update',update)
supportRouter.get('/findall',findall)
supportRouter.get('/findone',findone)
supportRouter.get('/del',del)
module.exports=supportRouter