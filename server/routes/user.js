import express from "express";

import { Register, Login } from "../controllers/user.js";
const router = express.Router();

router.post("/signup", Register);
router.post("/signin", Login);

export default router;
