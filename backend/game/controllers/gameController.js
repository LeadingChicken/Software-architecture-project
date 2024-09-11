const gameService = require('../services/gameService');

class GameController {
    async createGame(req, res) {
        try {
            const newGame = await gameService.createGame(req.body);
            const collection = await gameService.findAllGame();
            res
                .status(200)
                .json({
                    message: 'Game created successfully',
                    newGame,
                    collection
                });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findGameById(req, res) {
        try {
            const game = await gameService.findGameById(req.params.id);
            if(!game) {
                res.status(404).json({ message: 'Game not found'});
            }
            res.status(200).json(game);
        } catch(error) {
            res.status(400).json({ message: error.message })
        }
    }

    async findAllGame(req, res) {
        try {
            const game = await gameService.findAllGame();
            res.status(200).json(game);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateGame(req, res) {
        try {
            const existingGame = await gameService.findGameById(req.params.id);
            if(!existingGame) {
                res.status(404).json({ message: 'Game not found' });
            }
            const updatedGame = await gameService.updateGame(
                req.params.id,
                existingGame.gameName,
                req.body
            )
            res
                .status(200)
                .json({ message: 'Game updated successfully', updatedGame });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteGame(req, res) {
        try {
            const existingGame = await gameService.findGameById(req.params.id);
            if(!existingGame) {
                res.status(404).json({ message: 'Game not found' });
            }
            const deletedGame = await gameService.deleteGame(req.params.id);
            const collection = await gameService.findAllGame();
            res
                .status(200)
                .json({ 
                    message: 'Game deleted successfully', 
                    deletedGame, 
                    collection });
        } catch(error) {
            res
                .status(400)
                .json({ message: error.message });
        }
    }
}

module.exports = new GameController();