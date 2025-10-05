import ratelimit from "../config/upstash.js";




const rateLimiter=async (req,res,next)=>{
    try{
        const {success}=await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message:"Too Many Requests,Please Try Later"})
        }
        next();
    }catch(error){
        console.error.status(404).json({message:"Rate Limit Error"});
        next(error);

    }
    
};

export default rateLimiter;