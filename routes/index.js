import express from 'express';
import { workExperience } from '../controllers/generalInfoController.js';


const router = express.Router();

router.get('/', workExperience);

export default router;