import mongoose from "mongoose";

export const connectDB = async () =>{
     await mongoose.connect('mongodb+srv://sanikadeshmukh45:270311@cluster0.nikc1wj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}