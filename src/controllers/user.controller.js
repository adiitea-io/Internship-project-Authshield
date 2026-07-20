import * as userService from "../services/user.service.js"

export const getCurrentUser = async (req, res) => {
    try {
        const currentUser = await userService.getUserById(req.user.id);
        if (!currentUser) {
            return res.status(404).json({
                message: "User not found"
            })
        } return res.status(200).json(currentUser)

    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch current user"
        });

    }
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUserById(req.user.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        return res.status(200).json({
            message: "User deleted successfully"
        });


    } catch (error) {
        
        return res.status(500).json({
            message: "failed to delete user "
        })
    }

}