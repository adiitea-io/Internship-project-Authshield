import {Router} from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Welcome to AuthShield🛡️🦁");

});

router.use("/auth", authRoutes);

export default router;
