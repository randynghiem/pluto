import { FilterStatus, ACTIONS } from './action-main';

const filter = (state = FilterStatus.SHOW_ALL, action) => {
  switch(action.type){
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;