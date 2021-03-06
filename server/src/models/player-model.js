const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
    // id is auto generated by mongo db, hence may not need to be added here
    playerNo: {
        type: Number,
        required: true,
    },
    playerName: {
        type: String,
        required: true,
    },
    playerPosition: {
        type: String,
    }
})
module.exports = mongoose.model('Player', playerSchema);
