
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import instituteRoutes from "./routes/institute.routes.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());


app.use("/api/institute", instituteRoutes);

export default app;