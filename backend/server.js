import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));

dns.setServers(["8.8.8.8", "1.1.1.1"]);


const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://nileshmaurya2004_db_user:oF6bv3uovTWves90@linkedinclone.8dt2yf0.mongodb.net/?appName=LinkedinClone")

    app.listen(9090, () => {
        console.log("Server is running on port 9090");
    })
}

start();