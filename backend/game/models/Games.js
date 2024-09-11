const { text } = require('express')
const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        unique: true,
        required: true
    },
    picture: {
        type: String,
    },
    gameType: {
        type: Number,
        default: 0
    },
    allowExchanged: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    }
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;