import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  db,
  converCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from "./admin-data.action";
import AdminActionTypes from "./admin-data.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = db.collection("admin");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(AdminActionTypes.FETCH_ADMIN_START, fetchCollectionsAsync);
}

export function* adminSaga() {
  yield all([call(fetchCollectionStart)]);
}
