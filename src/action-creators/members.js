import { getMembers } from '../data';
import { MEMBERS_LOADED, MEMBERS_LOADING } from './action-types';

export const loadMembers = () => dispatch => {
  dispatch({ type: MEMBERS_LOADING });
  getMembers()
    .then(data =>
      dispatch({
        type: MEMBERS_LOADED,
        payload: data,
      })
    )
    .catch(err => console.log(err));
};
