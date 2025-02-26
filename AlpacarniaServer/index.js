import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import bookingRouter from "./routes/booking.route.js";
import offerRouter from "./routes/offer.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://57.128.159.250/alpacarnia",
      "http://localhost:5002",
      "http://57.128.159.250/alpacarnia/api"
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);
app.use(express.json());

/*app.listen(3000, () => {
  console.log("Server is running on port 3000");
});*/
const port = 5002;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/alpacarnia/api/user", userRouter);
app.use("/alpacarnia/api/auth", authRouter);
app.use("/alpacarnia/api/booking", bookingRouter);
app.use("/alpacarnia/api/offer", offerRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message,
  });
});
