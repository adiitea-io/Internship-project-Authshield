const bcrypt = require("bcrypt");
const userService = require("./user.service");

const register = async (userData) => {     //receive data from client
    
    const { name, email, password } = userData;    //fir yaha deconstruct it 
    const existingUser = await userService.getUserByEmail(email);   //check if they alread exist 
    
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);   //hash the password
    
    const newUser = {
        name,
        email,
        password: hashedPassword
    }

    const user = await userService.createUser(newUser); 
    return user;
    
};
