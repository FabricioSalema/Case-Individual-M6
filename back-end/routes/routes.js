const express = require("express");
const GamesController = require("../controllers/GamesController");
const router = express.Router();

router.get('/games', GamesController.listGames);
router.get('/game/:id', GamesController.listGame);
router.post('/game', GamesController.createGame);
router.post('/game/update', GamesController.updateGame);
router.delete('/game/delete/:id', GamesController.deleteGame);

module.exports = router;
