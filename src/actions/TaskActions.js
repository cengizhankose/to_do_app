import {UPDATE_TASKS} from './types';

export const updateTasks = (payload) => {
  return (dispatch) => {
    dispatch({type: UPDATE_TASKS, payload});
  };
};