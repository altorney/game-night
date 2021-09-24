const initState = {
  games: [
    { id: 1, title: 'monopoly' },
    { id: 2, title: 'foot and mouth' },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
