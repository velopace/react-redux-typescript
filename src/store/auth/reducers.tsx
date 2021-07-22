import produce from "immer";
import { AuthState, AuthAction, FetchAuthFailure, SetUser } from "types";
import { AuthActionType } from "./actions";

const INITIAL_STATE: AuthState = {
  loading: false,
  error: null,
  user: undefined,
};

export const auth = produce((draft, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.FETCH_AUTH_START:
      draft.loading = true;
      break;
    case AuthActionType.FETCH_AUTH_SUCCESS:
      draft.loading = false;
      draft.error = null;
      break;
    case AuthActionType.FETCH_AUTH_FAILURE:
      const { error } = action as FetchAuthFailure;
      draft.loading = false;
      draft.error = error;
      break;
    case AuthActionType.SET_USER:
      const { user } = action as SetUser;
      draft.user = user;
      break;
    default:
      return draft;
  }
}, INITIAL_STATE);
