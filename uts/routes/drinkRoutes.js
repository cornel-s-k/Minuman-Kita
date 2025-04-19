const express = require('express');
const router = express.Router();
const drinkController = require('../controllers/drinkController');

router.get('/', drinkController.getAllDrinks);
router.post('/', drinkController.addDrink);
router.get('/:id', drinkController.getDrink);
router.put('/:id', drinkController.updateDrink);
router.delete('/:id', drinkController.deleteDrink);

module.exports = router;
