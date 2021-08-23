import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../_reducers";
import monitorReducerEnhancer from "../_enhancers/monitor.enhancers";

const loggerMiddleware = createLogger();

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = composeWithDevTools(
  middlewareEnhancer,
  monitorReducerEnhancer
);

export const store = createStore(rootReducer, undefined, composedEnhancers);
