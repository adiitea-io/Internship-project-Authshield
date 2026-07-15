import {Router} from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./users.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to AuthShield🛡️🦁");

});

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

export default router;
