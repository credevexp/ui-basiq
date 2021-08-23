import { institutionConstants } from "../_constants";
import { institutionService } from "../_services";
import { alertActions } from ".";

export const institutionsActions = {
  getInstitutions,
};

function getInstitutions() {
  return (dispatch) => {
    dispatch(request({}));

    institutionService.getInstitutions().then(
      (institutions) => {
        dispatch(success(institutions));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: institutionConstants.INSTITUTION_REQUEST };
  }
  function success(institutions) {
    return { type: institutionConstants.INSTITUTION_SUCCESS, institutions };
  }
  function failure(error) {
    return { type: institutionConstants.INSTITUTION_FAILURE, error };
  }
}
