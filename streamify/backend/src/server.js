import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server is running on ${port}!`);
  connectDB();
});
