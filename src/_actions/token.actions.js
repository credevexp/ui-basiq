import { tokenConstants } from "../_constants";
import { tokenService } from "../_services";
import { alertActions } from "./";

export const tokenActions = {
  authenticateToken,
};

function authenticateToken() {
  return (dispatch) => {
    dispatch(request({}));

    tokenService.getToken().then(
      (token) => {
        dispatch(success(token));
        sessionStorage.setItem("token", JSON.stringify(token));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: tokenConstants.TOKEN_REQUEST };
  }
  function success(token) {
    return { type: tokenConstants.TOKEN_SUCCESS, token };
  }
  function failure(error) {
    return { type: tokenConstants.TOKEN_FAILURE, error };
  }
}
