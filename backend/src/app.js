import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use("/", routes);

export default app;