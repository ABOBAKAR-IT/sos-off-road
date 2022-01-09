const {create,update,findall,findone,del}=require('../2_controlar/users_controlar')
const express=require('express')
const userouter=express.Router()
userouter.post('/create',create)
userouter.post('/update',update)
userouter.get('/findall',findall)
userouter.get('/findone',findone)
userouter.get('/del',del)
module.exports=userouter