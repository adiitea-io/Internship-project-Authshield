import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import * as userController from "../controllers/user.controller";

const router = Router();

router.get("/me", authMiddleware, userController.getCurrentUser);

export default router;