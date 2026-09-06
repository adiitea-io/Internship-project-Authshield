import express from "express";
import { getEmployees} from "../controllers/employee.controller.js";
import { createEmployee } from "../controllers/employee.controller.js";


const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);

export default router;