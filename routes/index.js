import express from 'express';
import { workExperience } from '../controllers/generalInfoController.js';
import { buyNewHorses, sellHorse } from '../controllers/javaScriptController.js';
import { helloVisitor } from '../controllers/javaController.js';
import { contactForm } from '../controllers/contactController.js';
import { getShoppingList, addItemToShoppingList, removeItemFromShoppingList, updateItemOnShoppingList } from '../controllers/goLangController.js';
import { matchingInputs } from '../controllers/pythonController.js';

const router = express.Router();

router.get('/', workExperience);
router.get('/buy-horses', buyNewHorses);
router.get('/sell-horse', sellHorse);
router.get('/helloVisitor', helloVisitor);
router.post('/contact', contactForm);
router.get('/shoppingList', getShoppingList);
router.post('/shoppingAdd', addItemToShoppingList);
router.delete('/shoppingDelete', removeItemFromShoppingList);
router.post('/shoppingUpdate', updateItemOnShoppingList);
router.post('/matching-words', matchingInputs);


export default router;