import config from "config";
import { authHeader } from "../_helpers";

export const accountsService = {
  getAccounts,
};

function getAccounts() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  console.log("accounts request call ::", requestOptions);
  return fetch(`${config.apiUrl}/users/f3af4464-5d94-4ea3-8b0d-127ac93ef2cc/accounts`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  console.log("response from accounts service");
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
    console.log("data from accounts service ::", data);
    return data;
  });
}
