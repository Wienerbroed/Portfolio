import express from 'express';
import { workExperience } from '../controllers/generalInfoController.js';
import { buyNewHorses, sellHorse } from '../controllers/javaScriptController.js';


const router = express.Router();

router.get('/', workExperience);
router.get('/buy-horses', buyNewHorses);
router.get('/sell-horse', sellHorse);

export default router;