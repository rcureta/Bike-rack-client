import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = racks => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  racks
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
});

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/racks`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {return normalizeResponseErrors(res).json()})
    .then( data  => {
      dispatch(fetchProtectedDataSuccess(data.racks))
    })
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};


export const ADD_RACK_REQUEST = 'ADD_RACK_REQUEST';
export const addRackRequest = () => ({
  type: ADD_RACK_REQUEST
});

export const ADD_RACK_SUCCESS = 'ADD_RACK_SUCCESS';
export const addRackSuccess = (rack) => ({
  type: ADD_RACK_SUCCESS,
  rack
});

export const ADD_RACK_ERROR = 'ADD_RACK_ERROR';
export const addRackError = (error) => ({
  type: ADD_RACK_ERROR,
  error
});

export const addRack = (  latitude, longitude) => (dispatch, getState) => {
  dispatch(addRackRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/racks`, {
    method: 'POST',
    body: JSON.stringify( latitude, longitude),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((rack) => {
    dispatch(addRackSuccess(rack));
  }).catch(err => {
    dispatch(addRackError(err));
  });
};
