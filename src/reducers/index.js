import { combineReducers } from 'redux';

import ColumnsReducer from './reducer-column-names';
import SelectedFieldReducer from './reducer-field-selector';
import CensusTableData from './reducer-census-table';

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  selectedField: SelectedFieldReducer,
  censusTableData: CensusTableData
});

export default rootReducer;
