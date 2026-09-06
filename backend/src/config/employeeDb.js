import mongoose from "mongoose";

const employeeDB = mongoose.createConnection();

const connectEmployeeDB = async () => {
    try {
        await employeeDB.openUri(process.env.EMPLOYEE_MONGO_URI);

        console.log("Employee MongoDB connected successfully");
    } catch (error) {
        console.error(
            "Employee MongoDB connection failed:",
            error.message
        );

        process.exit(1);
    }
};

export { employeeDB };
export default connectEmployeeDB;