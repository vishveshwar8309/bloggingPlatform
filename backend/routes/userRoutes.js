import express from 'express';
const router = express.Router();
import { authenticateUser, logoutUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route("/signin").post(authenticateUser)
router.route("/register").post(registerUser);
router.route('/logout').post(protect, logoutUser)
export default router;