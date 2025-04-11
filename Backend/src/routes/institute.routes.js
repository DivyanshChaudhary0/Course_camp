
import express from "express";
import { createInstitute } from "../controllers/institute.controller.js"

const router = express.Router();

router.post("/create", createInstitute);

export default router;