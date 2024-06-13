import express from 'express';
const router = express.Router();
import { authenticateUser, registerUser } from '../controllers/userController.js';

router.route("/signin").post(authenticateUser)
router.route("/register").post(registerUser);
export default router;