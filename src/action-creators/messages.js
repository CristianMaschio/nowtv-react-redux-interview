import { getMessages } from '../data';
import { MESSAGES_LOADED, MESSAGES_LOADING } from './action-types';

export const loadMessages = () => dispatch => {
  dispatch({ type: MESSAGES_LOADING });
  getMessages().then(data =>
    dispatch({
      type: MESSAGES_LOADED,
      payload: data,
    })
  );
};
