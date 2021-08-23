import { institutionConstants } from "../_constants";

export function institutions(state = {}, action) {
  switch (action.type) {
    case institutionConstants.INSTITUTION_REQUEST:
      return {
        isInstitutionsLoading: true,
        isInstitutionsError: false,
      };
    case institutionConstants.INSTITUTION_SUCCESS:
      const { institutions } = action;
      return {
        ...institutions,
        isInstitutionsLoading: false,
        isInstitutionsError: true,
      };
    case institutionConstants.INSTITUTION_FAILURE:
      return {
        isInstitutionsLoading: false,
        isInstitutionsError: true,
      };
    default:
      return state;
  }
}
