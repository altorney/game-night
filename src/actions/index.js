import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const UPDATE = 'UPDATE';
export const SUCCESSFUL_UPDATE = 'SUCCESSFUL_UPDATE';

const url = 'https://api.jsonbin.io/v3/b/614d80faaa02be1d444dac42/latest';
const headers = { 'X-Master-Key': '$2b$10$bv0Gp1bg.HnTGYhqzwfzZ.svwdw0N1TZBukon7rIHC.CwgCkqjLgy' };

// export const getSmurfs = () => dispatch => {
export const getGames = () => (dispatch) => {
  // console.log('into createprojecct');
  dispatch({ type: LOADING });
  axios
    .get(url, { headers })
    .then((res) => {
      // console.log('into success then', res.data);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // console.log('into catch then');
      dispatch({ type: FAILURE, payload: err });
    });
};

// export const addSmurf = (smurf) => dispatch => {
//   dispatch({ type: LOADING })
//   axios.post('http://localhost:3333/smurfs', smurf)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data}))
//     .catch(err => dispatch({ type: FAILURE, payload: err}))
// }

// export const deleteSmurf = (id) => dispatch => {
//   dispatch({ type: LOADING })
//   axios.delete(`http://localhost:3333/smurfs/${id}`, id)
//     .then(res => dispatch({ type: SUCCESS, payload: res.data}))
//     .catch(err => dispatch({ type: FAILURE, payload: err}))
// }

// export const updateSmurf = (id, obj) => dispatch => {
//   dispatch({ type: LOADING })
//   axios.put(`http://localhost:3333/smurfs/${id}`, obj)
//     .then(res => dispatch({ type: SUCCESSFUL_UPDATE, payload: res.data}))
//     .catch(err => dispatch({ type: FAILURE, payload: err}))
// }

// export const update = (id, obj) => {
//   console.log('FROM UPDATE FUNC:' , obj)
//   return {
//     type: UPDATE,
//     payloadId: id,
//     payloadObj: obj
//   }
// }
