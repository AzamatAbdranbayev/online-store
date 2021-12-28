import {
  FETCH_REGISTER_USER_SUCCESS,
  FETCH_REGISTER_USER_FAIL,
  FETCH_LOGIN_USER_SUCCESS,
  FETCH_LOGIN_USER_FAIL,
  FETCH_REFRESH_USER_SUCCESS,
  FETCH_REFRESH_USER_FAIL,
} from '../userStore/userActionTypes';

const initialState = {
  registerError: null,
  loginError: null,
  user: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_REGISTER_USER_SUCCESS:
      return { ...state, registerError: null };
    case FETCH_REGISTER_USER_FAIL:
      return { ...state, registerError: action.value };

    case FETCH_LOGIN_USER_SUCCESS:
      return { ...state, user: action.value };
    case FETCH_LOGIN_USER_FAIL:
      return { ...state, loginError: action.value };

    case FETCH_REFRESH_USER_SUCCESS:
      return { ...state, user: action.value };
    case FETCH_REFRESH_USER_FAIL:
      return { ...state, user: null, loginError: action.value };
      
    default:
      return state;
  }
};

export default userReducer;
