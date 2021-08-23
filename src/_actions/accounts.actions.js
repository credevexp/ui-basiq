import { accountsConstants } from "../_constants";
import { accountsService } from "../_services";
import { alertActions } from ".";

export const accountsActions = {
  getAccounts,
};

function getAccounts() {
  return (dispatch) => {
    dispatch(request({}));

    accountsService.getAccounts().then(
      (accounts) => {
        dispatch(success(accounts));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: accountsConstants.ACCOUNTS_REQUEST };
  }
  function success(accounts) {
    return { type: accountsConstants.ACCOUNTS_SUCCESS, accounts };
  }
  function failure(error) {
    return { type: accountsConstants.ACCOUNTS_FAILURE, error };
  }
}
