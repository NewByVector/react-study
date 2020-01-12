import { SYNC_GET_FILE } from '../constant.js';

const initState = {
  text: ''
};

export function getFileSync() {
  return {
    type: SYNC_GET_FILE
  };
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case SYNC_GET_FILE:
      return {
        text: '666'
      };
    default:
      return state;
  }
}