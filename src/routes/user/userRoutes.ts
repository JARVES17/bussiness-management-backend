import express from "express";
import { authenticateToken } from "../../middleware/authenticateToken.ts";
import { getUserProfile } from "../../controllers/user/userController.ts";

const userRoutes = express.Router();

userRoutes.get("/user-info", authenticateToken, getUserProfile);

export { userRoutes };
