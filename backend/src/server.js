import express from "express";
import noteRoutes from "./routes/noteRoutes.js"
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";
import cors from "cors";


dotenv.config();

const app =express()
const PORT =process.env.PORT || 5001

app.use(cors({
    origin:"http://localhost:5173",
})
);
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes",noteRoutes);
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Successfully Connected to PORT:",PORT);
    });
});


