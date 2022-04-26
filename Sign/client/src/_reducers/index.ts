import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user_reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
  // blacklist: ["user"],
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
