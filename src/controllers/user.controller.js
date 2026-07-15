import * as userService from "../services/user.service"

export const getCurrentUser = async (req, res) => {
    try {
        const currentUser = await userService.getUserById(req.user.id);
        return res.status(200).json(currentUser)
        
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch current user"
        })
    }
        
}