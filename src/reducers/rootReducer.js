import { LOADING, SUCCESS, FAILURE } from '../actions/index';
// import { LOADING, SUCCESS, FAILURE, UPDATE, SUCCESSFUL_UPDATE } from '../actions/index';
const initState = {
  games: [
    // { id: 1, title: 'monopoly' },
    // { id: 2, title: 'foot and mouth1' },
  ],
  loading: false,
  error: '',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      // console.log('into loading');
      return {
        ...state,
        games: [],
        loading: true,
      };

    case SUCCESS:
      console.log('into SUCCESS', action.payload.record);
      return {
        ...state,
        games: action.payload.record,
        loading: false,
        error: '',
      };

    case FAILURE:
      // console.log('into FAILURE');
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //   case UPDATE:
    //     return{
    //       ...state,
    //       updateID: action.payloadId,
    //       clicked: true,
    //       update: action.payloadObj
    //     }

    //     case SUCCESSFUL_UPDATE:
    //       return {
    //         ...state,
    //         smurfs: action.payload,
    //         loading: false,
    //         err: '',
    //         updateID: "",
    //         clicked: false,
    //         update: []
    //       }

    default:
      return state;
  }
};

export default rootReducer;
