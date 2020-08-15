import {GET_TASKS, UPDATE_TASKS} from '../actions/types';

const INITIAL_STATE = {
  tasks: [
    {
      task: 'cengo',
      dsc:
        'Deneme olarak cengoyu kullanıyoruz bugün diğer bütün delikanlı olmayan adamlar gibi.',
      date: '13.08.2020',
    },
  ],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case UPDATE_TASKS:
      let arr=INITIAL_STATE.tasks.slice(); 
      const obj = action.payload;
      arr = INITIAL_STATE.tasks.slice();
      arr.push(obj);
      return {
        ...state,
        list: arr,
      };
    default:
      return {...state, tasks: arr};
  }
};
