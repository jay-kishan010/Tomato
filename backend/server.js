import express from "express"

import cors from "cors"

import { connectDB  } from "./config/db.js"
// app config 

const app=express()
const PORT=7000

// middleware 

app.use(express.json())
app.use(cors())


// db connection 
connectDB();

app.get("/", (req,res)=>{
    res.send("hello from backend");
})

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})