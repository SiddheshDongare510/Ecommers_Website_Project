import express from 'express';
import {registerController} from '../authController.js' 
const router=express.Router();
router.post('/register', registerController);
export default router;