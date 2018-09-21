import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  ADD_RACK_ERROR,
  ADD_RACK_SUCCESS
} from '../actions/protected-data';

const initialState = {
  racks: [],
  error: ''   
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    console.log(state);
    console.log(action.racks);
    return Object.assign({}, state, {
      racks: action.racks,
      error: ''
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }else if (action.type === ADD_RACK_SUCCESS) {
    console.log(action.rack);
    return Object.assign({}, state, {
      racks: [...state.racks,action.rack],
      error: ''
    });
  }
  else if (action.type === ADD_RACK_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
