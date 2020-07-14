const express = require('express');
const router = express.Router();
const playerController = require('./controllers/player-controller');

router.get('/players', playerController.getList);

router.post('/players', playerController.createItem);

router.get('/players/:id', playerController.getItem);

router.put('/players/:id', playerController.updateItem);

router.delete('/players/:id', playerController.deleteItem);

module.exports = router;
