import { ASYNC_GET_FILE } from '../constant.js';

const initState = {
  text: ''
};

export function getFileAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ASYNC_GET_FILE
      });
    }, 3000);
  }
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case ASYNC_GET_FILE:
      return {
        text: '666'
      };
    default:
      return state;
  }
}