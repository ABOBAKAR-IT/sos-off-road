const {create,update,findall,findone,del}=require('../2_controlar/cases_controlar')
const express=require('express')
const casesRouter=express.Router()
casesRouter.post('/create',create)
casesRouter.post('/update',update)
casesRouter.get('/findall',findall)
casesRouter.get('/findone',findone)
casesRouter.get('/del',del)
module.exports=casesRouter