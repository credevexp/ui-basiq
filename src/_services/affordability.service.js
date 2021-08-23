import config from "config";
import { authHeader } from "../_helpers";

export const affordabilityService = {
  createAffordability,
  getAffordability,
};

function createAffordability(username, password) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/f3af4464-5d94-4ea3-8b0d-127ac93ef2cc/affordability`, requestOptions).then(handleResponse);
}

function getAffordability() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  console.log("affordability request call ::", requestOptions);
  return fetch(`${config.apiUrl}/users/f3af4464-5d94-4ea3-8b0d-127ac93ef2cc/affordability/94097712-30f5-4f83-a19e-2a0bf311a967`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  console.log("response from affordability service");
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log("data from affordability service ::", data);
    return data;
  });
}
