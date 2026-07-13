import bcrypt from "bcrypt";
import { createUser, getUserByEmail } from "./user.service.js";

export const register= async (userData) => {
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
    return user;
}