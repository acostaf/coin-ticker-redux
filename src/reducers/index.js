import { handleActions } from 'redux-actions';
import { addItems } from '../actions/index';

export const reducer = handleActions(
  {
    [addItems]: (state, { payload }) => {
      return { ...state, items: [...payload.slice(0, 10), ...payload.slice(0, 10)] };
    },
  },
  { items: [] }
);
