const { default: mongoose } = require("mongoose");

const connectDatabase = async()=>{
    if(!mongoose.connections[0].readyState){
        try{
            const con = mongoose.connect("mongodb://0.0.0.0:27017/mern2023",{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })
            console.log("connected to database")
        }catch(error){
            console.log("error:",error)
        }
    }
}
module.exports= connectDatabase