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

