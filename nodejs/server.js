
const express=require("express");
const mongoose=require("mongoose");
const app=express();
/*
app.use(fileupload());
app.use(cors());
app.use(bp.urlencoded({ extended: true }));
})*/
app.listen(1000,()=>{
    console.log("Server Started...");
});
// app.use(express.urlencoded({extended:true}));
app.use(express.json())

// var dburl="mongodb://0.0.0.0:27017/mern2023";
const connectDatabase = require('./config/mongoose')
connectDatabase()

 
    /*var SchemaClass=mongoose.Schema;
    var colSchema=new SchemaClass({
        uid:{type:String,index:true},
        pwd:String,
        dos:{type:Date,default:Date.now},
        
    })
   
    var userColRef=mangoose.model("colusers",colschema);*/
    //================================================

     app.post("/postForm", (req, res) => { 
        console.log("Welcome"); 
         res.redirect("/"); 
  }); 
        
    // app.use(express.urlencoded({extended:true}));
    // app.use("/user",userRouter);

   /* app.get("/signup-delete",(req,resp)=>{

        userColRef.deleteOne({uid:req.query.uid}).then((msg)=>
        {
            if(msg.deletedCount==1)
            resp.send("Deleted");
            else
                resp.send("Invalid Id");

        
        }).catch((err)=>{
                resp.send(err);
         }) 
    })

    app.get("/signup-show",async (req,resp)=>{

       await userColRef.find().then((result)=>
        {
            resp.send(result);
        }).catch((err)=>{
                resp.send(err);
         }) 
        
    })

    app.get("/signup-update",(req,resp)=>{

        userColRef.updateOne({"uid":req.query.uid},{$set:{pwd:req.query.pwd}}).then((result)=>
        {
            resp.send(result);
        }).catch((err)=>{
                resp.send(err);
         }) 
    })
*/

  