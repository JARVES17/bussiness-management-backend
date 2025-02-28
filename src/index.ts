import express, { Request, Response } from "express";
import connectDB from "./config/mongoDB.config.ts";
import authRoutes from "./routes/auth/authRoutes.ts";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
