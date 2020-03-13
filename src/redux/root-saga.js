import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./admin-data/admin-data.saga";

import { adminSaga } from "./admin-data/admin-data.saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(adminSaga)]);
}
