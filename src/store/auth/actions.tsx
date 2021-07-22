import {
  FetchAuthStart,
  FetchAuthSuccess,
  FetchAuthFailure,
  GetUser,
  SetUser,
  User,
} from "types";

export const AuthActionType = {
  FETCH_AUTH_START: "@@FETCH_AUTH_START",
  FETCH_AUTH_SUCCESS: "@@FETCH_AUTH_SUCCESS",
  FETCH_AUTH_FAILURE: "@@FETCH_AUTH_FAILURE",
  GET_USER: "GET_USER",
  SET_USER: "SET_USER",
};

export const fetchAuthStart = (): FetchAuthStart => ({
  type: AuthActionType.FETCH_AUTH_START,
});

export const fetchAuthSuccess = (): FetchAuthSuccess => ({
  type: AuthActionType.FETCH_AUTH_SUCCESS,
});

export const fetchAuthFailure = (error: string): FetchAuthFailure => ({
  type: AuthActionType.FETCH_AUTH_FAILURE,
  error,
});

export const getUser = (): GetUser => ({
  type: AuthActionType.GET_USER,
});

export const setUser = (user: User): SetUser => ({
  type: AuthActionType.SET_USER,
  user,
});
