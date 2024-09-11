const Game = require('../models/Games')

class GameRepository {
    async createGame(gameData) {
        const newGame = new Game(gameData);
        return await newGame.save();
    }

    async findGameById(gameId) {
        return await Game.findById(gameId);
    }

    async findGameByName(gameName) {
        return await Game.findOne({ gameName });
    }

    async findAllGame() {
        return await Game.find();
    }

    async updateGame(gameId, gameData) {
        return await Game.findByIdAndUpdate(
            gameId, 
            gameData,
            { new: true }
        );
    }

    async deleteGame(gameId) {
        return await Game.findByIdAndDelete(gameId)
    }
}

module.exports = new GameRepository();