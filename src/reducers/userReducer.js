import { USER_LOGGEDIN, USER_LOGGEDOUT } from "../config/actionTypes";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      return {
        ...state,
        user: action.user,
      };

    case USER_LOGGEDOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
