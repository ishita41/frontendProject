var getUserSchema=require("../models/user.model");

var getReactUserSchema=require("../models/react-user");

var path=require("path");
var userColRef=getUserSchema();//call

var reactUserColRef=getReactUserSchema();

 async function signupUserWithQuery(req,resp)
{


  console.log(req.query);
  var obj=new reactUserColRef(req.query);
  await  obj.save().then((doc)=>{
       console.log("$$$$$$$$$$$$$");
       resp.send("Signedup Successfullyyy");
    }).catch((err)=>{
           resp.send(err);
    })
}

async function signup_process_with_post(req,resp)
{
  

  console.log(req.body);
  var obj=new reactUserColRef(req.body);

  await  obj.save().then((doc)=>{
       console.log("$$$$$$$$$$$$$");
       resp.send("Signedup Successfullyyy");
    }).catch((err)=>{
           resp.send(err);
    })
}

async function signup_process_with_pic(req,resp)
  {
    
          console.log(req.body);
         // userColRef.create(req.query);
          var fpath=path.join(__dirname,"..","uploads",req.files.myfile.name);
          req.files.myfile.mv(fpath);
          console.log(fpath);
               
          req.body.picpath=req.files.myfile.name;

         var obj=new reactUserColRef(req.body);

       await  obj.save().then((doc)=>{
            console.log("$$$$$$$$$$$$$");
            resp.send("Saved and pic uploaded");
         }).catch((err)=>{
                resp.send(err);
         })
         console.log("************");
  }

async function signupUser(req,resp)
  {
          console.log(req.body);
         // userColRef.create(req.query);
          var fpath=path.join(__dirname,"..","uploads",req.files.ppic.name);
          req.files.ppic.mv(fpath);
          console.log(fpath);
               
          req.body.picpath=req.files.ppic.name;

         var obj=new userColRef(req.body);
       await  obj.save().then((doc)=>{
            console.log("$$$$$$$$$$$$$");
            resp.send(doc);
         }).catch((err)=>{
                resp.send(err);
         })
         console.log("************");
  }

module.exports={signupUser,signupUserWithQuery,signup_process_with_post,signup_process_with_pic}