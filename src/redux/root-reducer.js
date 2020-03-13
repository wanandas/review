import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import adminReducer from "./admin-data/admin-data.reducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  admin: adminReducer
});

export default persistReducer(persistConfig, rootReducer);
