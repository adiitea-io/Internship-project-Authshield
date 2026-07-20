import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.get("/me", authMiddleware, userController.getCurrentUser);
router.delete("/me", authMiddleware,userController.deleteUser)

export default router;