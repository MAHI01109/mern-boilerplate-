import express from "express";
import connectDB from "../config/db.js"; // Adjusted import path
import userRoutes from "./routes/user.route.js";
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Connect to database
connectDB();

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
app.use('/api/user',userRoutes);

