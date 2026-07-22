import * as authService from "../services/auth.service.js";

export const registerUser = async (req, res) => {
    try {
        const user = await authService.register(req.body);
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

export const loginUser = async (req, res) => {
    try {
        const loginResponse = await authService.login(req.body);
        res.status(200).json(
            {
                message: "Login successful",
                ...loginResponse
            })
    }

    catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

export const logout = async (req, res) => {
    return res.status(200).json({
        message : "logged out successfully"
    })
}
    
