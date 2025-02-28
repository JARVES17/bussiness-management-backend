import express, { Request, Response } from "express";
import connectDB from "./config/mangodb.ts";
import authRoutes from "./routes/auth/authRoutes.ts";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());

// ✅ Define routes before starting the server
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// ✅ Connect to MongoDB after defining middleware
connectDB();

// ✅ Start the server after everything is set up
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
