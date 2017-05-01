import {
  FETCH_CENSUS_DATA
} from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_CENSUS_DATA:
      return action.payload.data.census;
  }
  return state;
}

