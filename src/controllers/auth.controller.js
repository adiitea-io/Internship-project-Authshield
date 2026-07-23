import * as authService from "../services/auth.service.js";

export const registerUser = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        return res.status(201).json({
            message: "user registered successfully",
            user
        });
    }

    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        const loginResponse = await authService.login(req.body);
        return res.status(200).json(
            {
                message: "Login successful",
                ...loginResponse
            })
    }

    catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

export const logout = async (req, res) => {
    return res.status(200).json({
        message: "logged out successfully"
    })
}

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const resetToken = await authService.forgotPassword(email);
        return res.status(200).json({
            message: "reset token has been generated",
            resetToken

        })
    }
    catch (error) {
        console.error(error);
       return  res.status(400).json({
            message: error.message
        })
    }
}


export const resetPassword = async (req, res) => {
    try {
        const { resetToken, newPassword } = req.body;

        await authService.resetPassword(resetToken, newPassword);
        return res.status(200).json({
            message: "Password reset sucessful"
        })

    } catch (error) {
        console.error(error);

        return res.status(400).json({
            message: error.message
        })
    }
}

