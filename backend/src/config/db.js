import mongoose from "mongoose";

 export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Is Connected Successfully!");
    }catch(error){
        console.error("Error In Connecting MONGODB!",error);
        process.exit(1);
    }
};

