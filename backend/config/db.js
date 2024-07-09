import mongoose from "mongoose"

export  const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://tomato:tomato@cluster0.lgcdikb.mongodb.net/')
    .then(()=>{
        console.log("DB connected")
    })
.catch((err)=>{
    console.log(err);
})
}
