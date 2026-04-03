import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load env variables
dotenv.config();

// ✅ Initialize app
const app = express();

// ✅ Middleware (for JSON data)
app.use(express.json());

// ✅ Import User model (IMPORTANT for index creation)
import User from "./models/User.js";

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ DB Error:", err);
  });

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});