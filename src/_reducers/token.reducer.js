import { tokenConstants } from "../_constants";

export function token(state = {}, action) {
  switch (action.type) {
    case tokenConstants.TOKEN_REQUEST:
      return {
        isAuthenticating: true,
        isAuthenticated: false,
        isAuthenticatonFailed: false,
      };
    case tokenConstants.TOKEN_SUCCESS:
      return {
        isAuthenticating: false,
        isAuthenticated: true,
        isAuthenticatonFailed: false,
      };
    case tokenConstants.TOKEN_FAILURE:
      return {
        isAuthenticating: false,
        isAuthenticated: false,
        isAuthenticatonFailed: true,
      };
    default:
      return state;
  }
}
