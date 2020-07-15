import { combineReducers } from 'redux';
import playerReducer from './player-reducer';

export default combineReducers({
    players: playerReducer
})