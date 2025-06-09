import { Router } from "express";
import LoginController from "../controllers/LoginController";
import { authMiddleware } from "../middleware/authMiddleware";
import bcrypt from "bcryptjs";

const router = Router();
const loginController = new LoginController();

router.post("/login", loginController.login);

export default router;
