import { reducer as getFileAsyncReducer } from './actions/getFileAsync';
import { reducer as getFileSyncReducer } from './actions/getFileSync';

export default  {
  async: getFileAsyncReducer,
  sync: getFileSyncReducer
};