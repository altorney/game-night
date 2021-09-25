import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const UPDATE = 'UPDATE';
export const SUCCESSFUL_UPDATE = 'SUCCESSFUL_UPDATE';
export const SUCCESSFUL_DELETE = 'SUCCESSFUL_DELETE';

const url = 'https://api.jsonbin.io/v3/b/614d80faaa02be1d444dac42/latest';
const headers = { 'X-Master-Key': '$2b$10$bv0Gp1bg.HnTGYhqzwfzZ.svwdw0N1TZBukon7rIHC.CwgCkqjLgy' };

export const getGames = () => (dispatch) => {
  // dispatch({ type: LOADING });
  // axios
  //   .get(url, { headers })
  //   .then((res) => {
  //     // console.log('into success then', res.data);
  //     dispatch({ type: SUCCESS, payload: res.data.record });
  //   })
  //   .catch((err) => {
  //     // console.log('into catch then');
  //     dispatch({ type: FAILURE, payload: err });
  //   });
};

export const addGame = (game) => (dispatch) => {
  // dispatch({ type: LOADING });
  dispatch({ type: SUCCESSFUL_UPDATE, payload: game });
  // axios.post('http://localhost:3333/smurfs', game)
  //   .then(res => dispatch({ type: SUCCESS, payload: res.data}))
  //   .catch(err => dispatch({ type: FAILURE, payload: err}))
};

export const deleteGame = (id) => (dispatch) => {
  // dispatch({ type: LOADING });
  dispatch({ type: SUCCESSFUL_DELETE, payload: id });
  // axios.delete(`http://localhost:3333/smurfs/${id}`, id)
  //   .then(res => dispatch({ type: SUCCESS, payload: res.data}))
  //   .catch(err => dispatch({ type: FAILURE, payload: err}))
};
