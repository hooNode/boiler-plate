import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./index";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

// Redux-Persist
import { persistStore } from "redux-persist";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);

export default { store, persistor };
