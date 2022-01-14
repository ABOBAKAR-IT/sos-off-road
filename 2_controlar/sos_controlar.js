const express = require('express')
const path=require('path')
const multer=require('multer')
app=express()
app.use(express.json())
const {create,update,findall,findone,del}=require('../3_services/sos_services')

module.exports.create=async(req,res)=>{
    try {
      var data=  req.file
        console.log(data);
        if(!req.file){
            res.status(400)
            res.send("Upload A File!")
            return
        }
        var  samplefile=data
        console.log(samplefile);
      //await fileuplaod(samplefile)

        // let data=await create(req.body)
        res.send("done")
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.update=async(req,res)=>{
    try {
    let data=await update(req.body)
    res.send(data)
    
} catch (error) {
    console.log(error);
}
}
module.exports.findall=async(req,res)=>{
    try {
    let data=await findall(req.body)
    res.send(data)
    
} catch (error) {
    console.log(error);
}
}
module.exports.findone=async(req,res)=>{
    try {
    let data=await findone(req.body)
    res.send(data)
    
} catch (error) {
    console.log(error);
}
}

module.exports.del=async(req,res)=>{
    try {
    let data=await del(req.body)
    res.send(data)
} catch (error) {
    console.log(error);
}
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
 module.exports.upload = multer({ storage: storage });
