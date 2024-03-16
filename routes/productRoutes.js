import express, { Router } from 'express';
import { isAdmin,reqireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

//routes
router.post('/create-product',reqireSignIn,isAdmin,formidable(),createProductController);

export default Router;