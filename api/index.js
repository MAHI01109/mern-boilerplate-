import express from "express";
import connectDB from "../config/db.js"; 
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Connect to database
connectDB();

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
  const statusCode= err.statusCode||500;
  const message =err.message||'Internal server Error';
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,
  })
});