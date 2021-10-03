const express=require("express");
const app=express();
const apiRouter=require("./router/apiRouter");
const mongoose=require("mongoose")
const cors=require("cors")

const hostName="127.0.0.1"
const port =8500;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(request,response)=>{
    response.send(`<h2>Welcome To Express Server</h2>`)

})
mongoose.connect('mongodb://127.0.0.1:27017/test-data',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then((response)=>{
    console.log(`Server is Connected To MongoDB Successfully`)

}).catch((err)=> {
    console.error(err)
    process.exit(1)

})

app.use('/api',apiRouter)

app.listen(port,hostName,()=>{
    console.log(`Server is Started at http://${hostName}:${port}`)

})
