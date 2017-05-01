import {
  FETCH_COLUMN_NAMES
} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COLUMN_NAMES:
      const columns = action.payload.data.fields;
      return columns;
  }
  return state;
}
