import config from "config";
export const tokenService = {
  getToken,
};


function getToken() {

  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  console.log("token request call ::", requestOptions);
  return fetch(`${config.tokenBaseUrl}/token`, requestOptions)
    .then(handleResponse)
    .then((response) => {
      console.log("response frmo token::");

      return response;
    });
  
}

function handleResponse(response) {
  console.log("response from token service");
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log("data from token service ::", data);
    return data;
  });
}
