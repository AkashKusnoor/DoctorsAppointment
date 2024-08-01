import express from 'express';
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, homeController, applyDoctorController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router()

//routing
//REGISTER || POST METHOD
router.post("/register", registerController);

//LOGIN || POST METHOD
router.post("/login", loginController);

//HOME || POST METHOD
router.post("/user/:id  ", requireSignIn, homeController);

//FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//PROTECTED USER ROUTE AUTH
router.get('/user-auth', requireSignIn, (req,res)=>{
   res.status(200).send({ok:true})
})

//PROTECTED ADMIN ROUTE AUTH
router.get('/admin-auth', requireSignIn, isAdmin, (req,res)=>{
   res.status(200).send({ok:true})
})

//UPDATE PROFILE
router.put('/update-profile', requireSignIn, updateProfileController);

//Apply Doctor
router.post("/apply-doctor",requireSignIn, applyDoctorController);



export default router;