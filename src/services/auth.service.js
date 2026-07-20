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

    const token = jwt.sign({    
        id: user.id,                 
        role: user.role
    },
        process.env.JWT_SECRET);  
    
        
    return {
        token,
        user: {
            id: user.id,
            name: user.name,   
            email: user.email,
            role: user.role
        }
    };
}
