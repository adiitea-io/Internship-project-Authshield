import express from "express";
import {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controllers/employee.controller.js";

import upload from "../middleware/upload.middleware.js";


const router = express.Router();

router.get("/", getEmployees);

router.get("/:id", getEmployeeById);

router.post("/", upload.array("documents"), createEmployee);

router.patch("/:id", upload.array("documents"), updateEmployee);

router.delete("/:id", deleteEmployee);

export default router;