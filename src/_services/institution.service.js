import config from "config";
import { authHeader } from "../_helpers";

export const institutionService = {
  getInstitutions,
};

function getInstitutions() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  console.log("institutions request call ::", requestOptions);
  return fetch(`${config.apiUrl}/institutions`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  console.log("response from institution service");
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
    console.log("data from token service ::", data);
    return data;
  });
}
