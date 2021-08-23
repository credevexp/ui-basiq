import { affordabilityConstants } from "../_constants";

export function affordability(state = {}, action) {
  switch (action.type) {
    case affordabilityConstants.AFFORDABILITY_REQUEST:
      return {
        isAffordabilityLoading: true,
        isAffordabilityError: false,
      };
    case affordabilityConstants.AFFORDABILITY_SUCCESS:
      const { affordability } = action;
      return {
        ...affordability,
        isAffordabilityLoading: false,
        isAffordabilityError: true,
      };
    case affordabilityConstants.AFFORDABILITY_FAILURE:
      return {
        isAffordabilityLoading: false,
        isAffordabilityError: true,
      };
    default:
      return state;
  }
}
