const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const dotenv=require("dotenv").config()
const app=express()

const connection= mongoose.connect("mongodb+srv://github:Github5052@cluster0.z2rkxnh.mongodb.net/ChatData?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
     useUnifiedTopology: true
}) 
connection.then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "../frontend/build")));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    );
  } else {
    app.get("/", (req, res) => {
      res.send("API is running.. second time run");
    });
  }


app.listen(process.env.PORT,()=>{
    console.log("server is running")
}) 
