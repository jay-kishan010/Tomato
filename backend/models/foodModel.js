import mongoose from "mongoose"
import { type } from "os"

const foodSchema=new  mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}
})

const foodModel=new mongoose.model("food", foodSchema)

export default foodModel;