import { 
    GET_PLAYERS_SUCCESS, 
    GET_PLAYERS_STARTED, 
    GET_PLAYERS_FAILURE,
    ADD_PLAYERS_SUCCESS, 
    ADD_PLAYERS_STARTED, 
    ADD_PLAYERS_FAILURE,
    DELETE_PLAYERS_SUCCESS, 
    DELETE_PLAYERS_STARTED, 
    DELETE_PLAYERS_FAILURE,
    UPDATE_PLAYERS_SUCCESS, 
    UPDATE_PLAYERS_STARTED, 
    UPDATE_PLAYERS_FAILURE } from '../constants';
import axios from 'axios';

const getPlayersSuccess = players => ({
    type: GET_PLAYERS_SUCCESS,
    payload: players.data
});

const getPlayersStarted = () => ({
    type: GET_PLAYERS_STARTED
});

const getPlayersFailure = error => ({
    type: GET_PLAYERS_FAILURE,
    payload: {
        error
    }
});

export const getItems = () => {
    return dispatch => {
        dispatch(getPlayersStarted());

        axios
            .get(`http://localhost:8000/api/players`)
            .then(res => {
                dispatch(getPlayersSuccess(res.data));
            })
            .catch(err => {
                dispatch(getPlayersFailure(err.message));
            });
    }
}

const addPlayersSuccess = players => ({
    type: ADD_PLAYERS_SUCCESS,
    payload: players.data
});

const addPlayersStarted = () => ({
    type: ADD_PLAYERS_STARTED
});

const addPlayersFailure = error => ({
    type: ADD_PLAYERS_FAILURE,
    payload: {
        error
    }
});

export const addItem = (playerData) => {
    return dispatch => {
        dispatch(addPlayersStarted());

        axios
            .post(`http://localhost:8000/api/players`, playerData)
            .then(res => {
                dispatch(addPlayersSuccess(res.data.data));
                getItems()(dispatch);
            })
            .catch(err => {
                dispatch(addPlayersFailure(err.message));
            });
    }
}

const updatePlayersSuccess = playerId => ({
    type: UPDATE_PLAYERS_SUCCESS,
    payload: playerId
});

const updatePlayersStarted = () => ({
    type: UPDATE_PLAYERS_STARTED
});

const updatePlayersFailure = error => ({
    type: UPDATE_PLAYERS_FAILURE,
    payload: {
        error
    }
});

export const updateItem = (playerId, playerData) => {
    return dispatch => {
        dispatch(updatePlayersStarted());

        axios
            .put(`http://localhost:8000/api/players/${playerId}`, playerData)
            .then(res => {
                dispatch(updatePlayersSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(updatePlayersFailure(err.message));
            });
    }
}

const deletePlayersSuccess = playerId => ({
    type: DELETE_PLAYERS_SUCCESS,
    payload: playerId
});

const deletePlayersStarted = () => ({
    type: DELETE_PLAYERS_STARTED
});

const deletePlayersFailure = error => ({
    type: DELETE_PLAYERS_FAILURE,
    payload: {
        error
    }
});

export const deleteItem = (playerId) => {
    return dispatch => {
        dispatch(deletePlayersStarted());

        axios
            .delete(`http://localhost:8000/api/players/${playerId}`)
            .then(res => {
                dispatch(deletePlayersSuccess(playerId));
            })
            .catch(err => {
                dispatch(deletePlayersFailure(err.message));
            });
    }
}
