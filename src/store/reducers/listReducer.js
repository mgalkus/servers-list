import * as types from "../types";

const initialState = [];

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST:
      return [...state, ...action.payload];
    case types.SORT_NAME:
      return state.slice().sort(function(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    case types.SORT_DISTANCE:
      return state.slice().sort((a, b) => a.distance - b.distance);
    default:
      return state;
  }
}

export default listReducer;
