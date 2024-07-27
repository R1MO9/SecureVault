import { Router } from "express";
import { registerUser, loginUser } from "../Controllers/User.controller.js";
import { saveSitePassword, getSitePassword } from "../Controllers/Site.controller.js"
import { get } from "mongoose";

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/save-password', saveSitePassword);

router.get('/get-passwords', getSitePassword);

export default router;