const PlayerItem = require('../models/player-model');

const getList = async (req, resp, next) => {
    try {
        const response = await PlayerItem.find();
        resp.status(200).send({
            success: true,
            data: response
        });
    } catch (err) {
        resp.status(500).send({
            success: false,
            message: 'Failed to get data'
        });
    }

}

const createItem = async (req, resp, next) => {
    const {success, message} = validatePlayer(req.body);
    if(!success) {
        return resp.status(400).send({success, message});
    }
    const player = {
        playerNo: req.body.playerNo,
        playerName: req.body.playerName,
        playerPosition: req.body.playerPosition,
    }
    const playerModel = new PlayerItem(player);
    try {
        const response = await playerModel.save();
        resp.status(201).send({
            success: true,
            data: response,
        });
    } catch (err) {
        resp.status(500).send({
            success: false,
            message: 'Failed to save data',
        });
    }
    
}

const updateItem = async (req, resp, next) => {
    const id = req.params.id;

    const { success, message } = validatePlayer(req.body);
    if (!success) {
        return resp.status(400).send({ success, message });
    }

    const updatedPlayer = {
        playerNo: req.body.playerNo,
        playerName: req.body.playerName,
        playerPosition: req.body.playerPosition,
    }
    try {
        const response = await PlayerItem.findOneAndUpdate({
            _id: id
        }, updatedPlayer, { new: false });

        return resp.status(201).send({
            success: true,
            data: response,
        });
    } catch (err) {
        return resp.status(404).send({
            success: false,
            message: 'player not found',
        });
    }
}

const getItem = async (req, resp, next) => {
    const id = req.params.id;
    try {
        const response = await PlayerItem.findById(id);
        if (response) {
            return resp.status(200).send({
                success: true,
                data: response,
            });
        }
        return resp.status(404).send({
            success: false,
            message: 'player does not exist',
        });
    } catch (err) {
        resp.status(500).send({
            success: false,
            message: 'Failed to get data'
        });
    }
}

const deleteItem = async (req, resp, next) => {
    const id = req.params.id;
    try {
        await PlayerItem.findByIdAndRemove(id)
        return resp.status(200).send({
            success: true,
        });
    } catch(err) {
        return resp.status(404).send({
            success: false,
            message: 'player not found',
        });
    }
}

const validatePlayer = (player) => {
    if(!player.playerName) {
        return {
          success: false,
          message: 'name is required'
        };
    }
    if(!player.playerNo) {
        return {
          success: false,
          message: 'Player number is required'
        };
    }
    if(!player.playerPosition) {
        return {
          success: false,
          message: 'position is required'
        };
    }
    return {
        success: true,
        message:''
    };
}

module.exports = {
    getList,
    createItem,
    updateItem,
    getItem,
    deleteItem
}
