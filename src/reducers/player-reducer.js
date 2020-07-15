import {
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
  GET_PLAYERS_STARTED,
  DELETE_PLAYERS_SUCCESS,
  UPDATE_PLAYERS_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  players: [],
  error: null
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        players: [...state.players, ...action.payload]
      };
    case GET_PLAYERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DELETE_PLAYERS_SUCCESS:
      return {
        ...state,
        players: state.players.filter(player => player._id !== action.payload),
        loading: false
      };
    case UPDATE_PLAYERS_SUCCESS:
      debugger
      return {
        ...state,
        players: state.players.map(player => player._id === action.payload._id? action.payload: player),
        loading: false
      };
    default:
      return state;
  }
}