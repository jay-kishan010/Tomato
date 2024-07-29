import express from "express"

import cors from "cors"
import "dotenv/config"

import { connectDB  } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
// app config 

const app=express()
const port=process.env.PORT||7000

// middleware 

app.use(express.json())
app.use(cors())


// db connection 
connectDB();


// api endpoint 
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)

app.use("/api/order",orderRouter)

app.get("/", (req,res)=>{
    res.send("hello from backend");
})

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})