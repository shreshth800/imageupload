import { Router } from "express";
import { login, signup, logout } from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);
authRoutes.post("/logout", logout);

export default authRoutes;
