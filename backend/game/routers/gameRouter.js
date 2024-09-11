const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')

router.post('/', gameController.createGame);
router.get('/:id', gameController.findGameById);
router.get('/', gameController.findAllGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;
