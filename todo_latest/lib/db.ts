import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL ;

if(!MONGODB_URI){
    throw new Error("Please define the MONGODB_URL")
}

async function connectToDB(){
   try {
     const conn = mongoose.connect(MONGODB_URI as string);
   } catch (error) {
    
   }
}