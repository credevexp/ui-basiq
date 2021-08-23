import { accountsConstants } from "../_constants";

export function accounts(state = {}, action) {
  switch (action.type) {
    case accountsConstants.ACCOUNTS_REQUEST:
      return {
        isAccountsLoading: true,
        isAccountsError: false,
      };
    case accountsConstants.ACCOUNTS_SUCCESS:
      const { accounts } = action;
      return {
        ...accounts,
        isAccountsLoading: false,
        isAccountsError: true,
      };
    case accountsConstants.ACCOUNTS_FAILURE:
      return {
        isAccountsLoading: false,
        isAccountsError: true,
      };
    default:
      return state;
  }
}
