import bcyrpt from "bcrypt"
import User from "../models/user.model.js";

export const createUser = async (userData) => {
    const user = await User.create(userData);

    return user;
};

export const getUserByEmail = async (email) => {
    const user = await User.findOne({email});

    return user;
};

export const getUserById = async (id) => {
    const user = await User.findById(id);
    return await user.select("-password"); 
};

export const deleteUserById = async (id) => {
    const user = await User.findByIdAndDelete(id);
    
    return user;
};

export const changePassword = async (id, currentPassword, newPassword) => {
    const user = await User.findById(id);

    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await bcyrpt.compare(
        currentPassword,
        user.password
    )

    if (!isMatch) {
        throw new Error("Password is incorrect")
    }


    const isSamePassword = await bcyrpt.compare(
        newPassword,
        user.password
    )

    if (isSamePassword) {
        throw new Error("New password must be different from current password.")
    }

    const newHashedPassword = await bcyrpt.hash(newPassword, 10);
    user.password = newHashedPassword;
    await user.save();
}
    



     