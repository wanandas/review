import ReviewActionTypes from "./review.types";
import {
  db,
  converCollectionReviewSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchReviewStart = reviewMap => ({
  type: ReviewActionTypes.FETCH_REVIEW_START
});

export const fetchReviewSuccess = reviewMap => ({
  type: ReviewActionTypes.FETCH_REVIEW_SUCCESS,
  payload: reviewMap
});

export const fetchReviewFailure = errMessage => ({
  type: ReviewActionTypes.FETCH_REVIEW_FAILURE,
  payload: errMessage
});

export const fetchReviewStartAsync = () => {
  return dispatch => {
    const collectionRef = db.collection("review");
    dispatch(fetchReviewStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = converCollectionReviewSnapshotToMap(snapshot);
        dispatch(fetchReviewSuccess(collectionMap));
      })
      .catch(err => dispatch(fetchReviewFailure(err.message)));
  };
};
