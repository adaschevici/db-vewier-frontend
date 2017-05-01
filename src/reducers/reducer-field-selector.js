import {
  SET_SELECTED_FIELD
} from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_SELECTED_FIELD:
      return action.selectedField;
  }
  return state;
}
