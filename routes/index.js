import express from 'express';
import { workExperience } from '../controllers/generalInfoController.js';
import { buyNewHorses, sellHorse } from '../controllers/javaScriptController.js';
import { helloVisitor } from '../controllers/javaController.js';
import { contactForm } from '../controllers/contactController.js';


const router = express.Router();

router.get('/', workExperience);
router.get('/buy-horses', buyNewHorses);
router.get('/sell-horse', sellHorse);
router.get('/helloVisitor', helloVisitor);
router.post('/contact', contactForm);

export default router;