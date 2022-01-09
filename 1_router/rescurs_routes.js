const {create,update,findall,findone,del}=require('../2_controlar/rescurs_controlar')
const express=require('express')
const rescuresRouter=express.Router()
rescuresRouter.post('/create',create)
rescuresRouter.post('/update',update)
rescuresRouter.get('/findall',findall)
rescuresRouter.get('/findone',findone)
rescuresRouter.get('/del',del)
module.exports=rescuresRouter