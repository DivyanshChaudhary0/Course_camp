
import express from "express";
import { createInstitute, loginInstitute, addInstructor, addCourse } from "../controllers/institute.controller.js"
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", createInstitute);
router.post("/login", loginInstitute);
router.post("/addInstructor", auth, addInstructor);
router.post("/addCourse",auth, addCourse)


export default router;