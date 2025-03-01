import express from "express";
import { authenticateToken } from "../../middleware/authenticateToken.ts";
import {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
} from "../../controllers/user/userController.ts";

const userRoutes = express.Router();

userRoutes.get("/user-info", authenticateToken, getUserProfile);
userRoutes.get("/all-users", authenticateToken, getAllUsers);
userRoutes.post("/update-user", authenticateToken, updateUserProfile);

export { userRoutes };
