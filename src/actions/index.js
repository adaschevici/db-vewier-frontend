import axios from 'axios';

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_COLUMN_NAMES = 'FETCH_COLUMN_NAMES';
export const FETCH_CENSUS_DATA = 'FETCH_CENSUS_DATA';
export const SET_SELECTED_FIELD = 'SET_SELECTED_FIELD';

const ROOT_URL = 'http://localhost:8080';
const COLUMN_NAMES_URL = `${ROOT_URL}/api/model/column-names`;
const CENSUS_DATA_URL = `${ROOT_URL}/api`;

function requestColumnNames() {
  const url = `${COLUMN_NAMES_URL}`;
  const request = axios.get(url);
  return request;
}

export function fetchColumnNames() {
  const url = `${COLUMN_NAMES_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_COLUMN_NAMES,
    payload: request
  };
}

export function setSelectedField(selectedField) {
  return {
    type: SET_SELECTED_FIELD,
    selectedField: selectedField
  };
}

export function fetchCensusData(fieldName) {
  const url = `${CENSUS_DATA_URL}/census-view/${fieldName}`;
  const request = axios.get(url);

  return {
    type: FETCH_CENSUS_DATA,
    payload: request
  };
}
