const gamesDb = require("../models/Games");

class GamesController {
  async listGames(req, res) {
    try {
      const games = await gamesDb.findAll();
      return res.json(games);
    } catch (error) {
      console.error(`Erro ao buscar games ${error}`);
      res.status(500).json({ error: 'Erro ao buscar games' });
    }
  }

  async listGame(req, res) {
    try {
      const game = await gamesDb.findByPk(req.params.id);
      return res.json(game);
    } catch (error) {
      console.error(`Erro ao buscar game ${error}`);
      res.status(500).json({ error: 'Erro ao buscar game' });
    }
  }

  async createGame(req, res) {
    try {
      const game = await gamesDb.create(req.body);
      return res.json(game);
    } catch (error) {
      console.error(`Erro ao cadastar game ${error}`);
      res.status(500).json({ error: 'Erro ao cadastrar game' });
    }
  }

  async updateGame(req, res) {
    try {
      const { id, title, pg, price } = req.body;
      const game = await gamesDb.update({
        title: title,
        parental_guidance: pg,
        price: price
      }, { where: { id: id } })
      return res.json(game)

    } catch (error) {
      console.error(`Erro ao atualizar game ${error}`);
      res.status(500).json({ error: 'Erro ao atualizar game' });
    }
  }

  async deleteGame(req, res) {
    try {
      const game = await gamesDb.destroy({
        where: { id: req.params.id }
      });
      return res.send(`game ${game.title} deletado!`);
    } catch (error) {
      console.error(`Erro ao deletar game ${error}`);
      res.status(500).json({ error: 'Erro ao deletar game' });
    }
  }
}

module.exports = new GamesController;