import { instance } from '../../assets/constants';
import {
  FETCH_REGISTER_USER_SUCCESS,
  FETCH_REGISTER_USER_FAIL,
  FETCH_LOGIN_USER_SUCCESS,
  FETCH_LOGIN_USER_FAIL,
  FETCH_REFRESH_USER_SUCCESS,
  FETCH_REFRESH_USER_FAIL,
} from '../../store/userStore/userActionTypes';
import Router from 'next/router';

export const fetchRegisterUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post('/users', userData);
      dispatch({ type: FETCH_REGISTER_USER_SUCCESS });
      Router.push('/login', null, { shallow: true });
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch({ type: FETCH_REGISTER_USER_FAIL, value: e.response.data });
      } else {
        dispatch({ type: FETCH_REGISTER_USER_FAIL, value: e.message });
      }
    }
  };
};

export const fetchLoginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await instance.post('/users/sessions', userData);
      console.log('fetchLoginUser', response);
      dispatch({ type: FETCH_LOGIN_USER_SUCCESS, value: response.data });
      Router.push('/', null, { shallow: true });
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch({ type: FETCH_LOGIN_USER_FAIL, value: e.response.data });
      } else {
        dispatch({ type: FETCH_LOGIN_USER_FAIL, value: e.message });
      }
    }
  };
};

export const fetchRefreshUser = () => {
  return async (dispatch) => {
    try {
      const response = await instance.post('/users/refresh');
      dispatch({ type: FETCH_REFRESH_USER_SUCCESS, value: response.data });
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch({ type: FETCH_REFRESH_USER_FAIL, value: e.response.data });
      } else {
        dispatch({ type: FETCH_REFRESH_USER_FAIL, value: e.message });
      }
    }
  };
};

export const fetchDeleteSession = () => {
  return async (dispatch) => {
    try {
    } catch (e) {}
  };
};
