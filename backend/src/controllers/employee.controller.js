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

    
    
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        res.status(200).json(employee);

    } catch (error) {
        console.error("Error fetching employee:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        // Update normal employee fields
        Object.assign(employee, req.body);

        // Add newly uploaded documents
        if (req.files && req.files.length > 0) {
            const newDocuments = req.files.map((file) => ({
                fileName: file.originalname,
                fileSize: file.size,
                fileType: file.mimetype,
                filePath: `/uploads/employees/${file.filename}`
            }));

            employee.documents.push(...newDocuments);
        }

        const updatedEmployee = await employee.save();

        res.status(200).json(updatedEmployee);

    } catch (error) {
        console.error("Error updating employee:", error.message);
        res.status(400).json({
            error: error.message
        });
    }
};



const createEmployee = async (req, res) => {
    try {
        const documents = (req.files || []).map((file) => ({
            fileName: file.originalname,
            fileSize: file.size,
            fileType: file.mimetype,
            filePath: `/uploads/employees/${file.filename}`
        }));

        const employee = await Employee.create({
            ...req.body,
            documents
        });

        res.status(201).json(employee);

    } catch (error) {
        console.error("Error creating employee:", error.message);
        res.status(400).json({ error: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            });
        }

        await Employee.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Employee deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting employee:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
