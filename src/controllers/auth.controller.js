import { register } from "../services/auth.service.js";

export const registerUser= async (req, res) => {
    try {
        const user = await register(req.body);
        res.status(201).json({
            message: "user registered successfully",
            user
        });
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}