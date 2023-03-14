import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [],
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
        return state;
  }
};
