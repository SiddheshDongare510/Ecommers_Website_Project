import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { isAdmin, reqireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router=express.Router();

//routing
//Resgister || METHOD POST 
router.post("/register", registerController);

//login || post
router.post("/login", loginController);

//test routes
router.get('/test',reqireSignIn,isAdmin, testController);
export default router;