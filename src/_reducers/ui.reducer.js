import { userConstants } from "../_constants";

export function uiState(state = {}, action) {
  switch (action.type) {
    case userConstants.UPDATE_AMOUNT:
      const { amount } = action;
      return {
        ...state, loanAmount: amount      
      };
    default:
      return state;
  }
}
