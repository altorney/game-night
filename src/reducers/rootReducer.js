import { LOADING, SUCCESS, FAILURE, SUCCESSFUL_UPDATE, SUCCESSFUL_DELETE } from '../actions/index';
const initState = {
  games: [
    { id: 1, title: 'monopoly', selected: false },
    { id: 2, title: 'foot and mouth1', selected: false },
    { id: 3, title: 'foot and mouth2', selected: false },
  ],
  loading: false,
  error: '',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        games: [],
        loading: true,
      };

    case SUCCESS:
      return {
        ...state,
        games: action.payload,
        loading: false,
        error: '',
      };

    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUCCESSFUL_UPDATE:
      return {
        ...state,
        games: [...state.games, ...action.payload],
        loading: false,
        err: '',
      };

    case SUCCESSFUL_DELETE:
      const games = state.games.filter((game) => game.id !== action.payload);
      return {
        ...state,
        games: games,
        loading: false,
        err: '',
      };

    default:
      return state;
  }
};

export default rootReducer;
