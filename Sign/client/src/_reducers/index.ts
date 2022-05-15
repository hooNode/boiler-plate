import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user_reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  // persist 적용할 목록
  whitelist: ["user"],
  // persist 적용하지 않을 목록
  // blacklist: ["user"],
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
