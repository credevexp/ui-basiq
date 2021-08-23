import { userConstants } from "../_constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true,
        isRegistered: false,
        isRegistrationError: false,
      };
    case userConstants.REGISTER_SUCCESS:
      const { user } = action;
      return { ...user, isRegistered: true, isRegistrationError: false };
    case userConstants.REGISTER_FAILURE:
      return {
        registering: false,
        isRegistered: false,
        isRegistrationError: true,
      };
    default:
      return state;
  }
}
