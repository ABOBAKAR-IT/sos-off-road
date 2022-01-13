const path=require('path')
const file_uploader = require('express-fileupload')

const {create,update,findall,findone,del}=require('../3_services/sos_services')

module.exports.create=async(req,res)=>{
    try {
        let data=await create(req.body)
        res.send(data)
        
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



async function fileuplaod(file1,file2){
    var  samplefile=file1;
    samplefile.name=await file1.fieldname + "-" + Date.now() + path.extname(file1.originalname);
    var  upload_dir='./upload/'+samplefile.name;
    await samplefile.mv(upload_dir)
}