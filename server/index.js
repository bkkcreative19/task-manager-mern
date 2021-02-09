import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";
import listRouter from "./routes/list.js";
import taskRouter from "./routes/task.js";
dotenv.config();

const app = express();

// connect database
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.use("/api", userRouter);
app.use("/api", listRouter);
app.use("/api", taskRouter);

// PORT
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
