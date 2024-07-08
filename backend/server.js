import express from "express"

import cors from "cors"

// app config 

const app=express()
const PORT=7000

// middleware 

app.use(express.json())
app.use(cors())