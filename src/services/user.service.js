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
    return await User.findById(id).select("-password"); 
};

export const deleteUserById = async (id) => {
    const user = await User.findByIdAndDelete(id);
    
    return user;
}
