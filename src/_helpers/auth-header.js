export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(sessionStorage.getItem("token"));
  console.log("user for header::", user);
  if (user && user.access_token) {
    return {
      Authorization: "Bearer " + user.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}
