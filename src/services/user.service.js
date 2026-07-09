const User = require("../models/user.model");

const createUser = async (userData) => {
    const user = await User.create(userData);

    return user;
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({email});

    return user;
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;  
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById
};
 

