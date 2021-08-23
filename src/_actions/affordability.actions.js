import { affordabilityConstants } from "../_constants";
import { affordabilityService } from "../_services";
import { alertActions } from ".";

export const affordabilityActions = {
  createAffordability,
  getAffordability,
};

function createAffordability() {
  return (dispatch) => {
    dispatch(request({}));

    affordabilityService.createAffordability().then(
      (affordability) => {
        dispatch(success(affordability));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: affordabilityConstants.AFFORDABILITY_REQUEST };
  }
  function success(affordability) {
    return { type: affordabilityConstants.AFFORDABILITY_SUCCESS, affordability };
  }
  function failure(error) {
    return { type: affordabilityConstants.AFFORDABILITY_FAILURE, error };
  }
}

function getAffordability() {
  return (dispatch) => {
    dispatch(request({}));

    affordabilityService.getAffordability().then(
      (affordability) => {
        dispatch(success(affordability));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: affordabilityConstants.AFFORDABILITY_REQUEST };
  }
  function success(affordability) {
    return { type: affordabilityConstants.AFFORDABILITY_SUCCESS, affordability };
  }
  function failure(error) {
    return { type: affordabilityConstants.AFFORDABILITY_FAILURE, error };
  }
}
