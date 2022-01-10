const express=require('express');
const app=express();
app.use(express.json());
const database=require('./database')
const adminRouter=require('./1_router/admin_routes')
const userRouter=require('./1_router/users_routes')
const sosRouter=require('./1_router/sos_routes')
const applicationRouter=require('./1_router/applications_routes')
const casesRouter=require('./1_router/cases_routes')
const rescuresRouter=require('./1_router/rescurs_routes')
const supportRouter=require('./1_router/support_routes')
const relationship=require('./relationship')
app.use("/admin",adminRouter)
app.use('/user',userRouter)
app.use('/sos',sosRouter)
app.use('/application',applicationRouter)
app.use('/case',casesRouter)
app.use('/rescure',rescuresRouter)
app.use('/support',supportRouter)
const port=9100;
app.get("/",(req,res)=>{
res.send("hello werd")
})
// authenticate
database.authenticate().then(() => {
    console.log("database connected:");
    database.sync({force:true,alter:false}).then(()=>{
        console.log("create table");
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
});

app.listen(port,()=>{
console.log(`server work on port no ${port}`);

})
