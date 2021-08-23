import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { token } from "./token.reducer";
import { institutions } from "./institution.reducer";
import { accounts } from "./accounts.reducer";
import { affordability } from "./affordability.reducer.js";
import { uiState } from "./ui.reducer.js";


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  token,
  institutions,
  accounts,
  affordability,
  uiState
});

export default rootReducer;
