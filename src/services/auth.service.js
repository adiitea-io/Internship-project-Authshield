import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "./user.service.js";

export const register = async (userData) => {
    const { name, email, password } = userData;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        name,
        email,
        password: hashedPassword
    }

    const user = await createUser(newUser);
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
}


export const login = async (userData) => {
    const { email, password } = userData;

    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isPwdValid = await bcrypt.compare(password, user.password);
    if (!isPwdValid) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({    //token is basically what we attach with each request so that we dont need verify user each time 
        id: user.id,                 //no need name for jwt, its not a unique identifier 
        role: user.role
    },
        process.env.JWT_SECRET, { expiresIn: "1d" });  
    //jwt.sign() output will be a string 
        
    return {
        token,
        user: {
            id: user.id,
            name: user.name,   //we are returning user tho its in the token cuz its needed in UI, JWT is auth only
            email: user.email,
            role: user.role
        }
    };
}
