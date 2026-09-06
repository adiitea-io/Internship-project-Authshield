import mongoose from "mongoose";
import { employeeDB } from "../config/employeeDb.js";

const employeeSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String,
            required: true,
            unique: true
        },

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        phone: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        designation: {
            type: String,
            required: true
        },

        dateOfJoining: {
            type: Date,
            required: true
        },

        salary: {
            type: Number,
            required: true,
            min: 0
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active"
        },

        documents: [
            {
                fileName: {
                    type: String,
                    required: true
                },

                fileSize: {
                    type: Number,
                    required: true
                },

                fileType: {
                    type: String,
                    required: true
                },

                filePath: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const Employee = employeeDB.model("Employee", employeeSchema);

export default Employee;