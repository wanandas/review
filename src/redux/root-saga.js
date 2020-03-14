import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./admin-data/admin-data.saga";
import { fetchReviewStart } from "./review/review.action";

import { adminSaga } from "./admin-data/admin-data.saga";
import { reviewSaga } from "./review/review.saga";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(fetchReviewStart),
    call(adminSaga),
    call(reviewSaga)
  ]);
}
