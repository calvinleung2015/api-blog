const express = require("express")
const app = express();
const dontenv = require("dotenv");
const mongoose =require("mongoose");
const postRoute = require("./routes/posts")

dontenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

app.use("/api/posts", postRoute);

app.listen("5000", ()=>{
    console.log("Backend is running.");
})