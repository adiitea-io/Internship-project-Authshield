import Employee from "../models/employee.model.js";

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
    export { getEmployees };


const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json(employee);
    } catch (error) {
        console.error("Error creating employee:", error.message);
        res.status(400).json({ error: error.message });
    }
};
export { createEmployee };