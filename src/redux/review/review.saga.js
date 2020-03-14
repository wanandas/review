import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  db,
  converCollectionReviewSnapshotToMap
} from "../../firebase/firebase.utils";

import { fetchReviewFailure, fetchReviewSuccess } from "./review.action";

import ReviewActionTypes from "./review.types";

export function* fetchReviewAsync() {
  try {
    const collectionRef = db.collection("review");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      converCollectionReviewSnapshotToMap,
      snapshot
    );
    yield put(fetchReviewSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchReviewFailure(err.message));
  }
}

export function* fetchReviewStart() {
  yield takeLatest(ReviewActionTypes.FETCH_REVIEW_START, fetchReviewAsync);
}

export function* reviewSaga() {
  yield all([call(fetchReviewStart)]);
}
