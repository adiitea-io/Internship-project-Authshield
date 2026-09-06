import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import connectEmployeeDB from "./config/employeeDb.js";


dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
    await connectEmployeeDB();


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
